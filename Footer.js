import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
export default class FooterTabsIconTextExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content />
        <Footer>
          <FooterTab>
            <Button vertical>
              <Icon name="phonenumber" />
              <Text>00000000000</Text>
            </Button>
          
            <Button vertical>
              <Icon name="person" />
              <Text>FA14BE0091@MAJU.EDU.PK</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}