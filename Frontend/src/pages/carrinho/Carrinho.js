import useStore from '../../Components/Store/Store';
import './Carrinho.css';
import CustomButton from '../../Components/CustomButton/CustomButton';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Carrinho() {
  const ingredientesSelecionados = useStore((state) => state.ingredientesSelecionados);
  const orders = useStore((state) => state.orders);
  const limparCarrinho = useStore(state => state.limparCarrinho);
  const deleteOrder = useStore(state => state.deleteOrder);
  const navigate = useNavigate();


  const calcularPrecoIngredientes = () => {
    if (ingredientesSelecionados.length > 0) {
      // Somar os valores de todos os ingredientes selecionados
      const precoIngredientes = ingredientesSelecionados.reduce((total, ingrediente) => {
        return total + ingrediente.valor;
      }, 0);

      return precoIngredientes;
    }

    return 0;
  };

  const handlePagamento = (e) => {
    if (!orders.length) {
      alert("No orders to process.");
      return;
    }

    // Calculate the total value of all items
    const totalValue = orders.reduce((total, order) => {
      const orderTotal = order.sabor.preços[order.tamanho] + order.ingredientes.reduce((total, ingrediente) => total + ingrediente.valor, 0);
      return total + orderTotal;
    }, 0);

    // Navigate to the Pagamento component and pass the total value
    submitOrders(e);
    navigate('/pagamento', { state: { totalValue } });
  };

const submitOrders = (e) => {
  e.preventDefault();
  let ordersobj = {orders};
  ordersobj.orders.forEach(element => {
    let o = JSON.stringify(({
      tamanho: element.tamanho,
      sabor: element.sabor._id,
      ingredientes: element.ingredientes.map(ingrediente => ingrediente._id)
  }))
    fetch('http://localhost:3001/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: o
    }).then((res) => {
        toast.success('Pizza salva com sucesso!');
    }).catch((err) => {
        console.error('Erro:', err);
    });
  });
};

  if (orders.length === 0) {
    return (
      <div className="page-containerC">
        <h1>Carrinho</h1>
        <p>Nenhuma pizza selecionada no carrinho.</p>
      </div>
    );
  }

  const precoTotal = useStore.getState().calcularPrecoTotal();
  const precoIngredientes = calcularPrecoIngredientes();

  const handleContinuarComprando = (e) => {
    navigate('/tamanhos');
  };

  // Calcular o preço total incluindo tamanho, sabor e ingredientes
  const precoFinal = precoTotal + precoIngredientes;

  return (
    <div className="page-container">
      <h1>Carrinho</h1>
      {orders.map((order, index) => (
        <div key={index} className="pizza-details">
          <CustomButton onClick={deleteOrder}>X</CustomButton>
          <h2>Tamanho: {order.tamanho}</h2>
          <h2>Sabor: {order.sabor.sabor}</h2>
          <p>Descrição: {order.sabor.descrição}</p>
          <p>Valor da Pizza: R$ {order.sabor.preços[order.tamanho].toFixed(2)}</p>

          {/* Mostra os ingredientes selecionados */}
          <h3>Ingredientes Selecionados:</h3>
          <ul>
            {order.ingredientes.map((ingrediente) => (
              <li key={ingrediente.id}>
                {ingrediente.ingrediente} - R$ {ingrediente.valor.toFixed(2)}
              </li>
            ))}
          </ul>

          {/* Mostra o valor total dos ingredientes */}
          <p>Valor dos Ingredientes: R$ {order.ingredientes.reduce((total, ingrediente) => total + ingrediente.valor, 0).toFixed(2)}</p>

          {/* Mostra o valor total (Pizza + Ingredientes) */}
          <p>Valor Total: R$ {(order.sabor.preços[order.tamanho] + order.ingredientes.reduce((total, ingrediente) => total + ingrediente.valor, 0)).toFixed(2)}</p>
        </div>
      ))}


      <div className="button-container">
        <CustomButton onClick={handleContinuarComprando}>Continuar Comprando</CustomButton>
        <CustomButton onClick={limparCarrinho}>Limpar Carrinho</CustomButton>
        <CustomButton onClick={handlePagamento} className="button">Seguir para o Pagamento</CustomButton>
      </div>
    </div>
  );
}

export default Carrinho;


