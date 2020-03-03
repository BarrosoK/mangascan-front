import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Manga} from '../models/manga.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MangaService {

  // Use environement for url
  constructor(private http: HttpClient) {
  }

  getMangaInfo(id: string): Observable<Manga> {
    return this.http.get(`http://localhost:4242/manga/${id}`).pipe(
      map((res: any) => {
        return res.result;
      })
    );
  }

  getMangaChapter(id: string, chapter: number) {
    return this.http.get(`http://localhost:4242/manga/${id}/${chapter}`).pipe(
      map((res: any) => res.imgs)
    );
  }


  getMangaList() {
    return this.http.get(`http://localhost:4242/manga/`);
  }
}
