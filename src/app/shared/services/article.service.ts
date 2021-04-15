import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ArticleInterface } from "src/app/shared/types/article.interface";
import { GetArticleResponseInterface } from "src/app/shared/types/getArticleResponse.interface";
import { environment } from "src/environments/environment";

@Injectable()
export class ArticleService {
  constructor(private http: HttpClient) {}
  getArticle(slug: string): Observable<ArticleInterface> {
    const fullUrl = `${environment.apiUrl}/article/${slug}`;

    return this.http.get<GetArticleResponseInterface>(fullUrl).pipe(map((response: GetArticleResponseInterface) => response.article));
  }
}