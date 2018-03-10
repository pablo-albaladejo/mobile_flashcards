import React, { Component } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Layout from '../../constants/Layout';
const { width, height } = Layout.window;

import DeckPreview from './DeckPreview';

const styles = StyleSheet.create({
    container: {
        //https://github.com/facebook/react-native/issues/15707#issuecomment-340759872
        paddingBottom: height * 0.09,
    }
});

class DeckList extends Component {

    render() {

        const { items, onPressItem } = this.props;
                
        return (
            <FlatList
                contentContainerStyle={styles.container}
                data={items}
                renderItem={({ item, index }) =>
                    <DeckPreview
                        {...item}
                        index={index}
                        onPress={onPressItem}
                    />
                }
            />
        );
    }

}
export default DeckList;