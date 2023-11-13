import { create } from 'zustand';

export const useStore = create((set) => ({
    orders: [], // New state for storing orders
    tamanhoSelecionado: null,
    saborSelecionado: null,
    ingredientesSelecionados: [],
    saboresData: [],
    saboresdocesData: [],
    ingredientesData: [],
    ingredientesdocesData: [],

    setSelectedTamanho: (tamanho) => set({ tamanhoSelecionado: tamanho }),
    setSelectedSabor: (sabor) => set({ saborSelecionado: sabor }),
    setIngredientesSelecionados: (ingredientes) => set({ ingredientesSelecionados: ingredientes }),

    // New function for adding an order to the orders array
    addOrder: () => set((state) => {
        const newOrder = {
            tamanho: state.tamanhoSelecionado,
            sabor: state.saborSelecionado,
            ingredientes: state.ingredientesSelecionados,
        };
        return { orders: [...state.orders, newOrder] };
    }),
    calcularPrecoTotal: () => {
        const state = useStore.getState();
        const tamanho = state.tamanhoSelecionado;
        const sabor = state.saborSelecionado;
        const saboresData = state.saboresData;
        const saboresdocesData = state.saboresdocesData;

        if (tamanho && sabor) {
            const saborEncontrado = saboresData.find((s) => s.id === sabor.id);

            if (saborEncontrado && saborEncontrado.preços[tamanho]) {
                const precoTamanho = saborEncontrado.preços[tamanho];
                return precoTamanho;
            }
        }

        if (tamanho && sabor) {
            const saborEncontrado = saboresdocesData.find((s) => s.id === sabor.id);

            if (saborEncontrado && saborEncontrado.preços[tamanho]) {
                const precoTamanho = saborEncontrado.preços[tamanho];
                return precoTamanho;
            }
        }
        return 0;

    },

    calcularPrecoIngredientes: () => {
        const state = useStore.getState();
        const tamanho = state.tamanhoSelecionado;
        const ingredientesSelecionados = state.ingredientesSelecionados;
        const ingredientesData = state.ingredientesData;
        const ingredientesdocesData = state.ingredientesdocesData;

        if (tamanho && ingredientesSelecionados.length > 0) {
            const precoIngredientes = ingredientesSelecionados.reduce((total, ingrediente) => {
                const ingredienteEncontrado = ingredientesData.find((item) => item.id === ingrediente.id);
                if (ingredienteEncontrado && ingredienteEncontrado.preços) {
                    return total + ingredienteEncontrado.preços;
                }
                return total;
            }, 0);

            return precoIngredientes;
        }

        if (tamanho && ingredientesSelecionados.length > 0) {
            const precoIngredientes = ingredientesSelecionados.reduce((total, ingrediente) => {
                const ingredienteEncontrado = ingredientesdocesData.find((item) => item.id === ingrediente.id);
                if (ingredienteEncontrado && ingredienteEncontrado.preços) {
                    return total + ingredienteEncontrado.preços;
                }
                return total;
            }, 0);

            return precoIngredientes;
        }

        return 0;
    },

    reset: () => set({ tamanhoSelecionado: null, saborSelecionado: null, ingredientesSelecionados: [] }),
}));

export default useStore;
