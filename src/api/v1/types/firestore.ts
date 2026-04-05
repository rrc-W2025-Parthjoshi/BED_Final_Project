export type FirestoreDataTypes =
    | string
    | number
    | boolean
    | Date
    | null
    | FirestoreDataTypes[]
    | { [key: string]: FirestoreDataTypes };