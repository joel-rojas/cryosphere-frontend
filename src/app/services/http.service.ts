import {
  Injectable
} from '@angular/core';
import {
  Http,
  ConnectionBackend,
  RequestOptions,
  RequestOptionsArgs,
  Response,
  Headers
} from '@angular/http';
import {Observable} from 'rxjs';
import {map, catchError, finalize} from 'rxjs/operators';
import {LoadingService} from './loading.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService extends Http {

  constructor(
    backend: ConnectionBackend,
    defaultOptions: RequestOptions,
    private loaderService: LoadingService) {
    super(backend, defaultOptions);
  }

  /**
   * Performs any type of http request.
   */
  request(url: string, options ?: RequestOptionsArgs): Observable <Response> {
    return super.request(url, options);
  }

  /**
   * Performs a request with `get` method.
   * @param url - URL text
   * @param options - Http header options
   * @returns Http Response as Observable
   */
  get(url: string, options?: RequestOptionsArgs): Observable <any> {
    this.requestInterceptor();
    return super.get(url, this.requestOptions(options))
      .pipe(
        catchError(this.onCatch),
        map(
          (res: Response) => this.onSubscribeSuccess(res),
          (error: any) => this.onSubscribeError(error)
        ),
        finalize(() => {
          this.onFinally();
        }));
  }

  /**
   * Performs a request with `post` http method.
   * @param url - URL text
   * @param options - Http header options
   * @returns Http Response as Observable
   */
  post(url: string, body: any, options?: RequestOptionsArgs): Observable <any> {
    this.requestInterceptor();
    return super.post(url, body, this.requestOptions(options))
      .pipe(
        catchError(this.onCatch),
        map(
          (res: Response) => this.onSubscribeSuccess(res),
          (error: any) => this.onSubscribeError(error)
        ),
        finalize(() => {
          this.onFinally();
        }));
  }

  /**
   * Performs a request with `put` http method.
   * @param url - URL text
   * @param options - Http header options
   * @returns Http Response as Observable
   */
  put(url: string, body: any, options?: RequestOptionsArgs): Observable < any > {
    this.requestInterceptor();
    return super.put(url, body, this.requestOptions(options))
      .pipe(
        catchError(this.onCatch),
        map(
          (res: Response) => this.onSubscribeSuccess(res),
          (error: any) => this.onSubscribeError(error)
        ),
        finalize(() => {
          this.onFinally();
        }));
  }

  /**
   * Performs a request with `delete` http method.
   * @param url - URL text
   * @param options - Http header options
   * @returns Http Response as Observable
   */
  delete(url: string, options ?: RequestOptionsArgs): Observable < any > {
    this.requestInterceptor();
    return super.delete(url, this.requestOptions(options))
      .pipe(
        catchError(this.onCatch),
        map(
          (res: Response) => this.onSubscribeSuccess(res),
          (error: any) => this.onSubscribeError(error)
        ),
        finalize(() => {
          this.onFinally();
        }));
  }

  /**
   * Request interceptor starts loaderService.
   */
  private requestInterceptor(): void {
    this.loaderService.showPreloader();
  }

  /**
   * Response interceptor.
   */
  private responseInterceptor(): void {
    this.loaderService.hidePreloader();
  }

  private requestOptions(options ?: RequestOptionsArgs): RequestOptionsArgs {
    if (options == null) {
      options = new RequestOptions();
    }
    return options;
  }

  private onCatch(error: any, caught: Observable < any > ) {
    return Observable.throw(error);
  }

  private onSubscribeSuccess(res: Response): Response { return res.json(); }

  private onSubscribeError(res: any): void {}

  private onFinally(): void {
    this.responseInterceptor();
  }

}
