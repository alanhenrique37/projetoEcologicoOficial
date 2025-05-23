import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';
import { StyleSheet } from 'react-native';

export const DropSelect = ({ onChangeValue, value }) => {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: 'Não reciclável', value: 'Não Reciclável' },
    { label: 'Reciclável', value: ' Reciclável' },
    { label: 'Óleo', value: 'Óleo' },
    { label: 'Tampinhas Plásticas', value: 'Tampinhas' },
    { label: 'Lacres de Alumínio', value: 'Lacres' },
    { label: 'Tecidos', value: 'Tecidos' },
    { label: 'Meias', value: 'Meias' },
    { label: 'Material de escrita', value: 'Material de Escrita' },
    { label: 'Esponjas', value: 'Esponjas' },
    { label: 'Eletrônicos', value: 'Eletrônicos' },
    { label: 'Pilhas e Baterias', value: 'Pilhas e Baterias' },
    { label: 'Infectante', value: 'Infectante' },
    { label: 'Químicos', value: 'Químicos' },
    { label: 'Lâmpada fluorescente', value: 'Lampada fluorescente' },
    { label: 'Tonners de impressora', value: 'Tonners de impressora' },
    { label: 'Esmaltes', value: 'Esmaltes' },
    { label: 'Cosméticos', value: 'Cosméticos' },
    { label: 'Cartela de medicamento', value: 'Cartela de medicamento' },
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
