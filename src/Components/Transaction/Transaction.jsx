
import { Text, Progress, Card } from '@mantine/core';

export default function Transaction() {
  const data = [
    {
      title: 'Food',
      author: 'Isaac Asimov',
      year: 2500,
      reviews: { positive: 2223, negative: 259 },
    },
    {
      title: 'Travel',
      author: 'Mary Shelley',
      year: 1000,
      reviews: { positive: 5677, negative: 1265 },
    },
    
  ];
  const rows = data.map((row) => {
    

    return (
      <Card className='transaction'  radius="md" padding="xl" bg="var(--mantine-color-body)">
      <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
      {row.title}
      </Text>
      <Text fz="lg" fw={500}>
        ${row.year}
      </Text>
      <Progress value={100} mt="md" size="lg" radius="xl" />
      
    </Card>
    );
  });
  return (
    <> 
    
    <div clas>{rows}</div>
    </>
  );
}


