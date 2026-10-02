import FormularioProfessor from "../components/FormularioProfessor";

function PaginaCadastroProfessor(props) {
  return (
    <div>
      <h2>Cadastrar Professor</h2>

      <FormularioProfessor
        aoSalvar={props.aoSalvar}
      />
    </div>
  );
}

export default PaginaCadastroProfessor;