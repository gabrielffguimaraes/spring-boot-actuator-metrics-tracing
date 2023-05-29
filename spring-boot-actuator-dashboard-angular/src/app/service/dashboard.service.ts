import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { SystemHealth } from '../interface/system-health';
import { SystemCPU } from '../interface/system-CPU';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private ACTUATOR_URL = environment.actuatorUrl;

  constructor(private http: HttpClient) {}

 
  public getHttpTraces(): Observable<any> {
    return this.http.get<any>(`${this.ACTUATOR_URL}/httpexchanges`);
  }

  public getSystemHealth(): Observable<SystemHealth> {
    return this.http.get<SystemHealth>(`${this.ACTUATOR_URL}/health`);
  }

  public getSystemCPU(): Observable<SystemCPU> {
    return this.http.get<SystemCPU>(`${this.ACTUATOR_URL}/metrics/system.cpu.count`);
  }
  public getMemorySystem(): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}/memory-status/system`);
  }
  public getProcessUptime(): Observable<any> {
    return this.http.get<any>(`${this.ACTUATOR_URL}/metrics/process.uptime`);
  }
  public getCpuPercent(): Observable<any> {
    return this.http.get<SystemCPU>(`${this.ACTUATOR_URL}/metrics/system.cpu.usage`);
  }
}
