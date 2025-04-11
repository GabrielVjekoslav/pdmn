const App = () => {
  const estilobotao = {marginTop: 12, border: "none", borderRadius: 8, backgroundColor: "blueviolet", color: "white", paddingTop: 8, paddingBottom:8, width:"100%"}
  const textoRotulo = "Nome"
  const obterTextoBotao = () => {return "Enviar"}
  const aoClicar = () => alert("Clicou")
  return (
    <div 
      style={{backgroundColor: 'lightgray', padding: 12, borderRadius: 8, margin: "auto", width: 500}}>
          <label className="rotulo" htmlFor="nome" style={{marginBottom: 4, display: "block", }}><b>{textoRotulo}</b></label>
          <input type="text" id="nome" style={{borderRadius: 8, borderStyle: "hidden", outline: "none", width: "100%", padding: 8, boxSizing: "border-box"}}/>
          <button 
            onClick={aoClicar} 
            style={estilobotao}>
            <b>{obterTextoBotao()}</b>
            </button>
    </div>
  )
}
//comit do sid
export default App