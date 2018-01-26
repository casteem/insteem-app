import MarkdownIt from "markdown-it";
import React from "react";
import { ScrollView, View, Text, Alert } from "react-native";
import StoryForm from "./components/StoryForm";
import { updateStory, clearStory } from "insteem/src/services/stories/actions";
import Markdown from "react-native-markdown-renderer";
import {
  createTagArray,
  createPermLink
} from "insteem/src/services/stories/helpers";

import { connect } from "react-redux";

class SubmitScene extends React.Component {
  update(story) {
    this.props.onUpdateStory(story);
  }
  clear() {
    this.props.onClearStory();
  }
  submitStory() {
    // callback
    // (err, res) => {
    //   if (err) {
    //     Alert.alert("Couldn't submit Post");
    //   } else if (res) {
    //     TODO: Go to newly created post scene and clear post (redux).
    // Alert.alert("Post sucessful submitted.");
    // If submit successful clear the saved post.
    // this.clear();
    // this.props.navigation.navigate("Home");
    // }
    // }
    // );
  }

  render() {
    const { story } = this.props;
    return (
      <ScrollView style={styles.container}>
        <Text style={{ textAlign: "center", marginTop: 10 }}>
          Coming soon..
        </Text>
        <StoryForm
          submit={this.submitStory.bind(this)}
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

export default connect(mapStateToProps, mapDispatchToProps)(SubmitScene);

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
