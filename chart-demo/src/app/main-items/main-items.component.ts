import { Component, ElementRef, Input, OnInit } from '@angular/core';

export enum MeasurementType {
    mobile = 1,
    tables,
    desktop
}
@Component({
  selector: 'app-main-items',
  templateUrl: './main-items.component.html',
  styleUrls: ['./main-items.component.scss']
})
export class MainItemsComponent implements OnInit {

  isMeasurementsCalculated = false;
  isTableMeasurementsCalculated = false;

  measurementsListing: any;
  // Header & Table Listing is used when type is 2
  tableHeaderListing: any = [];
  tableRowsListing: any = [];

  @Input() measurements: any[] = [];

  constructor(private elRef: ElementRef) { }

  ngOnInit(): void {
    this.setMeasurementsListing();
  }

  ngOnDestroy(): void {
    this.clearData();
  }

  setMeasurementsListing() {
    // clear data when ever measurement is going to update
    this.clearData();

    if (this.measurements && this.measurements.length > 0) {

      const normalListing: any= [];
      let tableHeadersListing = [''];
      let tableRowsListing: any = [];

      this.measurements.forEach((measurement: any, index: any) => {
        measurement?.main_items?.forEach((item: { type: MeasurementType; items: any[]; headers: any[]; rows: any[]; label: any; icon: any; value_f: any; unit: any; unit_inverse: any; color: any; }) => {

          if (item.type == MeasurementType.desktop) {
            this.isMeasurementsCalculated = true;

            item.items.forEach(data => {
              normalListing.push(
                {
                  p_index: index,
                  p_class: 'p-h-767-desktop p-b-767-mob',
                  type: 3,
                  label: data.label,
                  icon: null,
                  device_icon: data.device_icon,
                  value_f: data.value_f,
                  unit: data.unit,
                  unit_inverse: data.unit_inverse,
                  color: data.color,
                }
              );
            });
          }

          if (item.type == MeasurementType.tables) {
            this.isTableMeasurementsCalculated = true;

            if (item.headers && item.headers.length > 0) {
              item.headers.forEach(header => {
                tableHeadersListing.push(header);
              });
            } else {
              tableHeadersListing = [];
            }

            if (item.rows && item.rows.length > 0) {
              item.rows.forEach(row => {
                tableRowsListing.push(row);
              });
            } else {
              tableRowsListing = [];
            }

          }

          if (item.type == MeasurementType.mobile) {
            this.isMeasurementsCalculated = true;

            normalListing.push(
              {
                p_index: index,
                p_class: 'p-h-767-desktop',
                type: 1,
                label: item.label,
                icon: item.icon,
                value_f: item.value_f,
                unit: item.unit,
                unit_inverse: item.unit_inverse,
                color: item.color,
              }
            );
          }
        });
      });

      if (this.isMeasurementsCalculated) {
        this.measurementsListing = normalListing;
      }

      if (this.isTableMeasurementsCalculated) {
        this.tableHeaderListing = tableHeadersListing;
        this.tableRowsListing = tableRowsListing;
      }
    } else {
      this.clearData();
    }
  }

  getHtmlContent() {
    return this.elRef.nativeElement.innerHTML;
  }

  clearData(){
    this.isMeasurementsCalculated = false;
    this.isTableMeasurementsCalculated = false;
    this.measurementsListing = [];
    this.tableHeaderListing = [];
    this.tableRowsListing = [];
  }

}
