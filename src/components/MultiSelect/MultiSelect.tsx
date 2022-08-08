import { useState } from 'react';
import { Group } from '@mantine/core';

import useStyles from 'components/MultiSelect/MultiSelect.styles';
import { SelectionOption } from 'components/SelectionOption/SelectionOption';

export const MultiSelect = () => {
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
      setSelectedCards(new Set([...selectedCards]));
    } else {
      setSelectedCards(new Set([option, ...selectedCards]));
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
