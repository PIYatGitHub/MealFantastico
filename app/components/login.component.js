import React, { Component } from "react";
import { Button, Item, Input, Icon, Text, Form } from "native-base";
import { observer } from "mobx-react/native";
import { observable } from "mobx";

@observer
export default class Login extends Component {
  @observable email = "";
  @observable password = "";

  constructor(props) {
    super(props);
  }

  async signIn() {
    const { auth } = this.props.stores;
    const { navigate } = this.props.navigation;
    console.log("email and pass before send...", this.email, this.password);
    const result = await auth.signIn({
      email: this.email,
      password: this.password
    });
    if (result) {
      console.log("result is:", result);
    }
    navigate("Match");
  }

  render() {
    const { auth } = this.props.stores;
    return (
      <Form>
        <Item style={{ marginBottom: 10 }} rounded>
          <Icon style={{ color: "#fff" }} name="md-person"></Icon>
          <Input
            style={{ color: "#fff" }}
            placeholder="email"
            placeholderTextColor="#fff"
            onChange={e => (this.email = e.nativeEvent.text.trim())}
          />
        </Item>
        <Item style={{ marginBottom: 10 }} rounded>
          <Icon style={{ color: "#fff" }} name="md-unlock"></Icon>
          <Input
            style={{ color: "#fff" }}
            placeholder="password"
            placeholderTextColor="#fff"
            secureTextEntry={true}
            onChange={e => (this.password = e.nativeEvent.text.trim())}
          />
        </Item>
        <Button
          rounded
          block
          style={{ marginBottom: 10 }}
          onPress={this.signIn.bind(this)}
        >
          <Text>Login</Text>
        </Button>
      </Form>
    );
  }
}
