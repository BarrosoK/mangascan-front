import { Component, OnInit } from '@angular/core';
import {MangaService} from '../../../core/services/manga.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.scss']
})
export class ChapterComponent implements OnInit {

  chapterImages;
  id;
  chapter;
  imgSize = 40;

  constructor(private route: ActivatedRoute, private router: Router, private mangaService: MangaService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = this.route.snapshot.params.id;
      this.chapter = this.route.snapshot.params.chapter;
      this.chapterImages = this.mangaService.getMangaChapter(this.id, this.chapter);
    });
  }

  previousChapter() {
    if (this.chapter > 0) {
      this.router.navigate([`/manga/chapter/${this.id}/${this.chapter - 1}`]);
    }
  }

  nextChapter() {
      // recuperer dans le store la limite
      this.router.navigate([`/manga/chapter/${this.id}/${this.chapter + 1}`]);
  }

}
