using { cuid } from '@sap/cds/common';

service ExternalDataService {
  entity ExternalItems as projection on external_items;
}

entity external_items {
  key ID          : String;
  Name            : String;
  Description     : String;
}
