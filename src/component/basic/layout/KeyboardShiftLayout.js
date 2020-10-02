import React, { Component } from 'react'
import { Animated, Dimensions, Keyboard, TextInput, UIManager, RefreshControl } from 'react-native'

const { State: TextInputState } = TextInput

export class KeyboardShiftLayout extends Component {
    state = {
        shift: new Animated.Value(0),
    }

    componentDidMount() {
        this.keyboardDidShowSub = Keyboard.addListener('keyboardDidShow', this.handleKeyboardDidShow)
        this.keyboardDidHideSub = Keyboard.addListener('keyboardDidHide', this.handleKeyboardDidHide)
    }

    componentWillUnmount() {
        this.keyboardDidShowSub.remove()
        this.keyboardDidHideSub.remove()
    }

    render() {
        const { shift } = this.state

        const refreshController = <RefreshControl
            refreshing={this.props.refreshing}
            onRefresh={this.props.refreshHandler}
            tintColor='#45ade1'
            colors={['#45ade1']}
        />

        return (
            <Animated.ScrollView
                contentContainerStyle={{ flex: 1 }}
                style={[{ transform: [{ translateY: shift }] }, this.props.style]}
                refreshControl={this.props.refreshHandler && refreshController}
                onScroll={(e) => {
                    var windowHeight = Dimensions.get('window').height,
                        height = e.nativeEvent.contentSize.height,
                        offset = e.nativeEvent.contentOffset.y;
                    if (windowHeight + offset >= height) {
                        if (this.props.scrollEndHanler)
                            this.props.scrollEndHanler()
                    }
                }}
            >
                {this.props.children}
            </Animated.ScrollView>
        );
    }

    handleKeyboardDidShow = (event) => {
        const { height: windowHeight } = Dimensions.get('window')
        const keyboardHeight = event.endCoordinates.height
        const currentlyFocusedField = TextInputState.currentlyFocusedField()
        UIManager.measure(currentlyFocusedField, (originX, originY, width, height, pageX, pageY) => {
            const fieldHeight = height
            const fieldTop = pageY
            const gap = (windowHeight - keyboardHeight) - (fieldTop + fieldHeight + 90)
            if (gap >= 0) {
                return
            }
            Animated.timing(
                this.state.shift,
                {
                    toValue: gap,
                    duration: 200,
                    useNativeDriver: true,
                }
            ).start()
        })
    }

    handleKeyboardDidHide = () => {
        Animated.timing(
            this.state.shift,
            {
                toValue: 0,
                duration: 200,
                useNativeDriver: true,
            }
        ).start()
    }
}