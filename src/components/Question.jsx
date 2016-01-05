import React from 'react'
import AceEditor from 'react-ace'
import 'brace/mode/java'
import 'brace/theme/github'

export default () => (
  <AceEditor style={{marginTop: 1 + 'em'}}
    mode = "java"
    theme = "github"
    name = "my-ace-editor"
    fontSize = { 14 }
    showPrintMargin = { false }
    maxLines = { 50 }
    minLines = { 25 }
    editorProps={{$blockScrolling: true}}
  />
)
