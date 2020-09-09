export class ItemModel {
  /// the unique internal identifier, specific to our system
  id : string

  /// Identifier optional if client has their own system identifier
  userDesignatedID: string

  /// the name of the item
  name: String

  /// An array of `Location` objects pertaining to this item
  locations: [Location]

  /// the quantity of this item available for purchase by customers
  customerAccessibleQuantity: number

  /// the quantity of this item NOT available for purchase by customers. This may be because the item is unprocessed, on hold, etc.
  backstockQuantity: number

  /// The date that this item was last purchased from a register at this location. (Independent of any store returns)
  /// Type: [`Timestamp`](https://developers.google.com/protocol-buffers/docs/reference/java/com/google/protobuf/Timestamp.html?is-external=true)
  dateLastPurchased: number

  storeID: string
}
