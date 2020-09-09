import { LocationType } from './location-type.enum';
import { Accessibility } from './accessibility.enum';

export class LocationModel {
  /// the aisle number or letter
  aisle : String;

  /// the aisle shelf number or general section
  aisleSection : String;

  /// the item's specific location
  spot : String;

  /// the text description of the location if more specifics are required
  description : String;

  /// the location type that describes how the item is displayed
  locationType : LocationType;

  /// the accessibility of the item to the customer,
  /// either `processed` (available for purchase) or `unprocessed` (unreachable for purchase)
  accessibility : Accessibility;
}
