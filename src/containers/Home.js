import React, {Component} from 'react'
import {Text, View, StyleSheet, TouchableOpacity, TextInput, ScrollView} from 'react-native'

import Note from '../components/Note'

class Home extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            noteArray: [],
            noteText: ''
        }
    }

    addNote() {
        if (this.state.noteText) {
                const d = new Date()
                this.state.noteArray.push({
                    'date' : d.getFullYear() +
                    "/" + (d.getMonth() + 1) +
                    "/" + d.getDate(),
                    'note': this.state.noteText
                })
                this.setState({ noteArray: this.state.noteArray })
                this.setState({ noteText: ''})

        }
    }

    deleteNote() {
        this.state.noteArray.splice(key, 1)
        this.setState({ noteArray: this.state.noteArray})
    }

    render(){
        let notes = this.state.noteArray.map((val, key) => {
            return <Note key={key} keyval={key} val={val}
                    deleteMethod={ ()=> this.deleteNote(key)} />
        })

        return(
            <View style={styles.container}>
                <View style={styles.header}>
                <Text style={styles.headerText}>My Todolist</Text>
                </View>

                <ScrollView style={styles.scrollContainer}>
                    {notes}
                </ScrollView>
                <View style={styles.footer}>
                    <TextInput 
                    onChangeText={(noteText) => this.setState({noteText})}
                    value={this.state.noteText}
                    style={styles.textInput}
                    placeholder='Add List..'
                    placeholderTextColor= 'white'
                    underlineColorAndroid='transparent'>
                    </TextInput>
                    <TouchableOpacity
                    onPress={ this.addNote.bind(this) } 
                    style={styles.addButton}>
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex : 1
    },
        header: {
        backgroundColor: '#40739e',
          alignItems: 'center',
          justifyContent: 'center',
          borderBottomWidth: 10,
          borderBottomColor: '#ddd',
        },
        headerText: {
          color: 'white',
          fontSize: 18,
          padding: 26,
        },
        scrollContainer: {
          flex: 1,
          marginBottom: 100,
        },
        footer: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 10,
        },
        textInput: {
          alignSelf: 'stretch',
          color: '#fff',
          padding: 20,
          width: 290,
          height: 62,
          marginBottom: 10,
          marginLeft: 5,
          backgroundColor: '#252525',
          borderTopWidth: 2,
          borderTopColor: '#ededed',
          borderRadius: 50
        },
        addButton: {
          position: 'absolute',
          zIndex: 11,
          right: 7,
          bottom: 14,
          backgroundColor: '#0097e6',
          width: 55,
          height: 55,
          borderRadius: 50,
          alignItems: 'center',
          justifyContent: 'center',
          elevation: 8,
        },
        addButtonText: {
          color: '#fff',
          fontSize: 24,
        },
})


export default Home
