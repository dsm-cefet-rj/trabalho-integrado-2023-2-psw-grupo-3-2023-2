import { create } from 'zustand';

export const useStore = create((set) => ({
    tamanhoSelecionado: null,
    saborSelecionado: null,
    saboresData: [],

    setSelectedTamanho: (tamanho) => set({ tamanhoSelecionado: tamanho }),
    setSelectedSabor: (sabor) => set({ saborSelecionado: sabor }),
    calcularPrecoTotal: () => {
        const state = useStore.getState();
        const tamanho = state.tamanhoSelecionado;
        const sabor = state.saborSelecionado;
        const saboresData = state.saboresData;

        if (tamanho && sabor) {
            const saborEncontrado = saboresData.find((s) => s.id === sabor.id);

            if (saborEncontrado && saborEncontrado.preços[tamanho]) {
                const precoTamanho = saborEncontrado.preços[tamanho];
                return precoTamanho;
            }
        }

        return 0;
    },
    reset: () => set({ tamanhoSelecionado: null, saborSelecionado: null }),
}));

export default useStore;
