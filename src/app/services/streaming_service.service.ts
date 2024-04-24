import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { streamingAva } from '../enviroment';
import { FilmsModel } from '../models/filmsModels';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StreamingService {

  constructor(private http: HttpClient) { }

  showBaseUrl(name:string){
    console.log(`URL Cortada: ${streamingAva.streamingAvBaseUrl} ${name} ${streamingAva.streamingAvaBaseContUrl}`)
    console.log(`URL Junta: ${streamingAva.streamingAvBaseUrl + name + streamingAva.streamingAvaBaseContUrl} `)

  }

  //Teste básico com Nome Batman como Default
  getBatman() {
    return this.http.get(streamingAva.streamingAvaBaseBatmanUrl, {
      headers: new HttpHeaders()
      .set(streamingAva.XRapidAPIHostHeaderName, streamingAva.XRapidAPIHostHeaderValue)
      .set(streamingAva.XRapidAPIKeyHeaderName, streamingAva.XRapidAPIKeyHeaderValue),
      params: new HttpParams()
      .set('units', 'metric')
      .set('mode', 'json')
    })
  }

  getFilmInfo(name: string): Observable<FilmsModel> {
    return this.http.get<FilmsModel>(streamingAva.streamingAvBaseUrl+ name +streamingAva.streamingAvaBaseContUrl, {
      headers: new HttpHeaders()
      .set(streamingAva.XRapidAPIHostHeaderName, streamingAva.XRapidAPIHostHeaderValue)
      .set(streamingAva.XRapidAPIKeyHeaderName, streamingAva.XRapidAPIKeyHeaderValue),
      params: new HttpParams()
      .set('q', name)
      .set('units', 'metric')
      .set('mode', 'json')
    })
  }

}
