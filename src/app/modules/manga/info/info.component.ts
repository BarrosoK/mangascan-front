import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {map, switchMap} from 'rxjs/operators';
import {MangaService} from '../../../core/services/manga.service';
import {Manga} from '../../../core/models/manga.model';
import {Observable} from 'rxjs';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  id: string;
  imgNumber  = 0;
  manga: Observable<Manga>;
  displayedColumns: string[] = ['number', 'view', 'uploaded', 'read'];
  dataSource;

  constructor(private route: ActivatedRoute, private router: Router, private mangaService: MangaService) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.manga = this.mangaService.getMangaInfo(this.id);
    this.manga.subscribe((res: any) => {
      this.dataSource = new MatTableDataSource(res.chapters);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.imgNumber = this.getRandomId(res.backgroundImgUrl.length);
    });
  }

  getRandomId(max: number) {
    return Math.floor((Math.random()*max));
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  read(number: number) {
    this.router.navigateByUrl(`/manga/chapter/${this.id}/${number}`);
  }
}
