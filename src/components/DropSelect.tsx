import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';
import { StyleSheet } from 'react-native';

export const DropSelect = ({ onChangeValue, value }) => {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: 'Não reciclável', value: 'nao_reciclavel' },
    { label: 'Reciclável', value: 'reciclavel' },
    { label: 'Óleo', value: 'oleo' },
    { label: 'Tampinhas Plásticas', value: 'tampinhas' },
    { label: 'Lacres de Alumínio', value: 'lacres' },
    { label: 'Tecidos', value: 'tecidos' },
    { label: 'Material de escrita', value: 'material_escrita' },
    { label: 'Esponjas', value: 'esponjas' },
    { label: 'Eletrônicos', value: 'eletronicos' },
    { label: 'Pilhas e Baterias', value: 'pilhas_baterias' },
    { label: 'Infectante', value: 'infectante' },
    { label: 'Químicos', value: 'quimicos' },
    { label: 'Lâmpada fluorescente', value: 'lampada' },
    { label: 'Tonners de impressora', value: 'tonners' },
    { label: 'Esmaltes', value: 'esmaltes' },
    { label: 'Cosméticos', value: 'cosmeticos' },
    { label: 'Cartela de medicamento', value: 'cartela_medicamento' },
  ]);

  const styles = StyleSheet.create({
    dropStyle: {
      width: '85%',
      borderColor: 'transparent',
     
    },
    
  });

  return (
    <DropDownPicker
      placeholder="Selecione uma categoria"
      style={styles.dropStyle}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={(val) => {
        onChangeValue?.(val); // avisa o componente pai
      }}
      setItems={setItems}
      listItemContainerStyle={{ height: 20 }}  // Altura de cada item
      listItemLabelStyle={{ fontSize: 16  }}    // Tamanho da fonte dos itens
    />
  );
};
