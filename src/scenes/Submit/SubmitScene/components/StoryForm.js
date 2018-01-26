import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

// Create a post with `title`, `body` and tags.
const StoryForm = props => {
  return (
    <View style={styles.form}>
      <TextInput
        placeholder="Title"
        style={styles.input}
        onChangeText={text => props.update({ title: text })}
        value={props.post.title}
        autoCapitalize="none"
        autoCorrect={false}
      />

      <TextInput
        value={props.post.body}
        multiline={true}
        placeholder="Your Post"
        placeholderTextColor="silver"
        style={[styles.input, styles.textarea]}
        onChangeText={text => props.update({ body: text })}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TextInput
        value={props.post.tags}
        placeholder="Tags"
        style={styles.input}
        onChangeText={text => props.update({ tags: text })}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Button title="Submit" onPress={props.submit} />
      <Button title="Clear" onPress={e => props.clear(e)} />
    </View>
  );
};

export default StoryForm;

const styles = StyleSheet.create({
  form: {
    margin: 10,
    padding: 5
  },
  input: {
    fontSize: 16,
    minHeight: 40,
    borderColor: "silver",
    borderWidth: 1,
    margin: 5,
    padding: 5,
    borderRadius: 3
  },
  textarea: {
    height: 100
  }
});
