export type abouts = {
  title: String;
  text: String;
  icon: string;
};

export type timeline = {
  title: String;
  text: String;
  timestamp: String;
  image: string;
};

export type works = {
  title: String;
  text: String;
  stacks: Array<String>;
  links: Array<Array<String>>;
  image: string;
};
