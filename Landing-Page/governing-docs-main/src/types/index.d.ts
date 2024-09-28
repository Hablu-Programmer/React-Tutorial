declare interface IChildren {
  children: React.ReactNode;
}
declare interface IClassName {
  className?: string;
}

declare interface IClassChildren extends IChildren, IClassName {}
