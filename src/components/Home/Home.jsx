import logo from '../../assets/logo.png'
import Card from '../Card'

import './Home.css'

export default function Home({ setAtualPage }) {
  function startRecall() {
    setAtualPage('recall')
  }

  return (
    <>
      <img className="logo-image" src={logo} alt="logo"/>
      <h1 className="title">ZapRecall</h1>
      <Card contentColor="red" onClick={() => startRecall()}>Iniciar Recall!</Card>
    </>
  )
}