import { useState } from 'react';
import { Group } from '@mantine/core';

import useStyles from 'components/MultiSelect/MultiSelect.styles';
import { SelectionOption } from 'components/SelectionOption/SelectionOption';

export interface MultiSelectProps {
  isMultiSelect: boolean;
}

export const MultiSelect: React.FC<MultiSelectProps> = (props) => {
  const { classes } = useStyles();

  const [selectedCards, setSelectedCards] = useState(new Set<string>());

  const cardContent = [
    { title: 'card 1', text: 'card 1 text' },
    { title: 'card 2', text: 'card 2 text' },
    { title: 'card 3', text: 'card 3 text' },
    { title: 'card 4', text: 'card 4 text' },
  ];

  const handleCardSelected = (option: string) => {
    if (selectedCards.delete(option)) {
      props.isMultiSelect
        ? setSelectedCards(new Set([...selectedCards]))
        : setSelectedCards(new Set([]));
    } else {
      props.isMultiSelect
        ? setSelectedCards(new Set([option, ...selectedCards]))
        : setSelectedCards(new Set([option]));
    }
  };

  return (
    <Group className={classes.container} position="center" pt={10}>
      {cardContent.map((content) => (
        <SelectionOption
          key={content.title}
          title={content.title}
          descrption={content.text}
          isActive={selectedCards.has(content.title)}
          onClick={handleCardSelected}
        />
      ))}
    </Group>
  );
};
