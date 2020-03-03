import {Component, OnInit} from '@angular/core';
import {MangaService} from '../../../core/services/manga.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  mangaList = [];
  mangatotal = 0;
  filterValue = '';

  constructor(private mangaService: MangaService) {
  }

  ngOnInit(): void {
    // Charger dans le store (installer le store aussi serait pas mal)
    this.mangaService.getMangaList().subscribe((res: any) => {
      console.log(res);
      this.mangatotal = res.total;
      this.mangaList = res.list;
    });
  }

}
