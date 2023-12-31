import { Group, Paper, Text, ThemeIcon, SimpleGrid, Button} from '@mantine/core';
import { IconArrowUpRight, IconArrowDownRight } from '@tabler/icons-react';
import classes from './Stats.module.css';
import Transaction from '../Transaction/Transaction';
import { Container} from '@mantine/core';


const data = [
  { title: 'Food', value: '$13,456', diff: 34 },
  { title: 'Rent', value: '$4,145', diff: -13 },
  { title: 'Travel', value: '$745', diff: 18 },
  { title: 'Alcohol', value: '$130,456', diff: 200 },
  { title: 'Drugs', value: '$4,145', diff: -13 },
  { title: 'Others', value: '$745', diff: 18 },
];

export default function Stats() {
  const stats = data.map((stat) => {
    const DiffIcon = stat.diff > 0 ? IconArrowUpRight : IconArrowDownRight;

    return (
      <>   
      
      <Paper withBorder p="md" radius="md" key={stat.title}>
        <Group justify="apart">
          <div>
            <Text c="dimmed" tt="uppercase" fw={700} fz="xs" className={classes.label}>
              {stat.title}
            </Text>
            <Text fw={700} fz="xl">
              {stat.value}
            </Text>
          </div>
          <ThemeIcon
            color="gray"
            variant="light"
            style={{
              color: stat.diff > 0 ? 'var(--mantine-color-teal-6)' : 'var(--mantine-color-red-6)',
            }}
            size={38}
            radius="md"
          >
            <DiffIcon size="1.8rem" stroke={1.5} />
          </ThemeIcon>
        </Group>
        <Text c="dimmed" fz="sm" mt="md">
          <Text component="span" c={stat.diff > 0 ? 'teal' : 'red'} fw={700}>
            {stat.diff}%
          </Text>{' '}
          {stat.diff > 0 ? 'increase' : 'decrease'} compared to last month
        </Text>
      </Paper>
      </>
    );
  });

  return (
    <>
    <h2>Current Month Analysis</h2> 
    <h3><Button>Add Category</Button></h3>
    <div className={classes.stats}>
    
      <SimpleGrid cols={{ base: 1, sm: 3 }}>{stats}</SimpleGrid>
      
    </div>
      <Container> 
      <h3 > Recent transactions</h3>
        <Transaction/> 
      </Container>
        
    </>
  );
}