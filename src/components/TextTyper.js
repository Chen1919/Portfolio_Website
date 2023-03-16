import React, { useState, useEffect } from 'react'

function TextTyper({ sentence, time }) {
  const sentences = [...sentence];
  const delay = time;
  const currText = sentences[0];
  const [sentenceIndex , setSentenceIndex] = useState(0);
  const [text, setText] = useState('')
  const [fullText, setFullText] = useState(currText)
  const [index, setIndex] = useState(0)
  const [isCursorBlinking, setIsCursorBlinking] = useState(true)
  const [typing, setTyping] = useState("istyping");

  useEffect(() => {
    const type = () => {
      if (index < fullText.length && typing === "istyping") {
        setTimeout(() => {
          setText(text + fullText[index])
          setIndex(index + 1)
          setIsCursorBlinking(true)
        }, delay)
      } else if (text === fullText ) { 
        setIsCursorBlinking(false)
        setTimeout(() => {
          setTyping('isdeleting');
        }, 2500);
      } 
    }
    const deleteText = () => {
      if (sentences.length !== 1) {
        if (typing === "isdeleting") {
          setTimeout(() => {
            setIsCursorBlinking(true)
            setText(text.slice(0, text.length - 1))
          }, 30) 
          if (text.length <= 0) {
            setIndex(text.length)
            if (sentenceIndex === sentences.length - 1) {
              setSentenceIndex(0)
              setFullText(sentences[sentenceIndex])
            } else {
              setSentenceIndex(sentenceIndex + 1)
              setFullText(sentences[sentenceIndex])
            }
            setTyping("istyping")
          }
        }
      }
    }
    if (typing === "istyping") {
      type()
    } else if (typing === "isdeleting") {
      deleteText()
    }
  }, [index, fullText, text, typing, sentenceIndex])
  
  return ( 
    <div className={isCursorBlinking ? "blinking-cursor" : null }>
      {text}
    </div>
    
  )
}

export default TextTyper;
