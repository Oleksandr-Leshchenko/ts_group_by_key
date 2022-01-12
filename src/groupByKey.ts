type GroupsMap<T> = {
  [key: string]: T[];
};

interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

interface Book {
  author: string,
  country: string,
  imageLink: string,
  language: string,
  pages: number,
  title: string,
  year: number,
}

type Item = Student | Book;

export function groupByKey(items: Item[], key: keyof Item): GroupsMap<Item> {
  const groups: GroupsMap<Item> = {};

  for (const item of items) {
    if (!groups.hasOwnProperty(item[key])) {
      groups[item[key]] = [];
    }

    groups[item[key]].push(item);
  }

  return groups;
}
