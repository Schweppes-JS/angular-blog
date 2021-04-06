import { Component, Input, OnInit } from "@angular/core";
import { UtilService } from "src/app/shared/services/utils.service";

@Component({
  selector: "mc-pagination",
  templateUrl: "./pagination.component.html",
  styleUrls: ["./pagination.component.scss"]
})
export class PaginationComponent implements OnInit {

  constructor(private utilsService: UtilService) {}

  @Input("total") totalProps!: number | undefined;
  @Input("limit") limitProps!: number;
  @Input("currentPage") currentPageProps!: number;
  @Input("url") urlProps!: string;

  pagesCount!: number;
  pages!: number[];

  ngOnInit(): void {
    this.pagesCount = Math.ceil(this.totalProps! / this.limitProps);
    this.pages = this.utilsService.range(1, this.pagesCount);
  }
}