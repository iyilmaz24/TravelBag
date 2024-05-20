export interface Item {
  id: number;
  text: string;
  packed: boolean;
}

export const initialItems: Item[] = [
  {
    id: 1,
    text: "Macbook",
    packed: false,
  },
  {
    id: 2,
    text: "Passport",
    packed: false,
  },
  {
    id: 3,
    text: "Good Mood",
    packed: true,
  },
];
