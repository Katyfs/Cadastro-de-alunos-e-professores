import ListaProfessores from "../components/ListaProfessores";

function PaginaListagemProfessores(props) {
  return (
    <div>
      <h2>Professores</h2>

      <ListaProfessores
        professores={props.professores}
        aoExcluir={props.aoExcluir}
      />
    </div>
  );
}

export default PaginaListagemProfessores;