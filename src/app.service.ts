import { Injectable } from '@nestjs/common';
import { metrics } from './tracer';

@Injectable()
export class AppService {
  getHello(): string {
    const metric = metrics.getMeter('api-service')
    const successMetric = metric.createCounter('hello_success')
    successMetric.add[1]

    const histogram = metric.createHistogram('request_validated')
    histogram.record(1000)
    return 'Hello World!';
  }
}
