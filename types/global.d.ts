interface Tag {
  _id: string;
  name: string;
}

interface Author {
  id_: string;
  name: string;
  image: string;
}

interface Questions {
  _id: string;
  title: string;
  tags: Tag[];
  author: Author;
  createdAt: Date;
  upvotes: number;
  answers: number;
  views: number;
}
