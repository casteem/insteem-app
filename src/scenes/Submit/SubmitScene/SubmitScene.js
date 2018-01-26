import MarkdownIt from "markdown-it";
import React from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { ScrollView, View, Text, Alert } from "react-native";
import StoryForm from "./components/StoryForm";
import { updateStory, clearStory } from "insteem/src/services/stories/actions";
import Markdown from "react-native-markdown-renderer";
import { createTagArray } from "insteem/src/services/stories/helpers";

import { connect } from "react-redux";

class SubmitScene extends React.Component {
  update(story) {
    this.props.onUpdateStory(story);
  }
  clear() {
    this.props.onClearStory();
  }
  submitStory(mutate, navigation) {
    mutate()
      .then(result => {
        const { data: { createPost: story } } = result;
        navigation.navigate("Story", {
          author: story.author,
          permlink: story.permlink
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { story, submit, navigation } = this.props;
    return (
      <ScrollView style={styles.container}>
        <Text style={{ textAlign: "center", marginTop: 10 }}>
          Coming soon..
        </Text>
        <StoryForm
          submit={this.submitStory.bind(this, submit, navigation)}
          update={this.update.bind(this)}
          clear={this.clear.bind(this)}
          post={this.props.story}
        />
        <View style={styles.preview}>
          <Text style={styles.title}>{story.title}</Text>
          <Markdown
            markdownit={MarkdownIt({
              html: true,
              linkify: true,
              typographer: true
            })}
          >
            {story.body}
          </Markdown>
          <Text>{story.tags}</Text>
        </View>
      </ScrollView>
    );
  }
}

SubmitScene.navigationOptions = {
  title: "Submit Story"
};

const Mutation = gql`
  mutation create($story: PostInput!, $key: String!) {
    createPost(post: $story, key: $key) {
      id
      author
      permlink
    }
  }
`;

const mapStateToProps = state => ({
  user: state.auth.username,
  wif: state.auth.wif,
  story: state.stories
});

const mapDispatchToProps = dispatch => {
  return {
    onUpdateStory: (title, body, tags) => {
      dispatch(updateStory(title, body, tags));
    },
    onClearStory: () => {
      dispatch(clearStory());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  graphql(Mutation, {
    // options: props => ({
    //   variables: { story: props.story, key: props.wif }
    // }),
    props: ({ mutate, ownProps }) => ({
      submit: () => {
        const { story, user, wif } = ownProps;
        // Converts tags into array
        story.tags = createTagArray(story.tags);
        return mutate({
          variables: {
            story: { ...story, author: user },
            key: wif
          }
        });
      }
    })
  })(SubmitScene)
);

const styles = {
  container: {
    backgroundColor: "white",
    height: "100%"
  },
  preview: {
    margin: 10
  },
  title: {
    fontWeight: "bold",
    marginBottom: 10
  }
};
