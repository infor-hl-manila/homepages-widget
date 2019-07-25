export interface IActivity {
  _ItemId: string;
  ID: string;
  Summary: string;
  Status: string;
  StartDate: string;
  IsCompleted: string;
  Completed: string;
  Location: string;
  EndDate: string;
  AttendeeCount: number;
  Result: string;
  Type: string;
  RowPointer: string;
  Display: string;
  Value: string;
}

export interface IPickLists {
  Category: string;
  Display: string;
  Value: string;
}
