import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { GlobalService } from './global.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./global.service";
let UciService = class UciService extends BaseService {
    constructor(http, globalService) {
        super(http, globalService);
        this.http = http;
        this.globalService = globalService;
        this.FORM_BASE_URL = 'https://dev.sunbirded.org/';
        this.globalService.baseUrl$.subscribe(value => {
            if (value) {
                this.BASE_URL = value + '/admin/';
                this.BASE_URL_V1 = value + '/admin/v1/';
                this.BASE_URL_V2 = value + '/admin/v2/';
                this.DATASET_URL = value.replace('/uci') + '/dataset/v1/';
            }
        });
        this.globalService.nlBaseUrl$.subscribe(value => {
            if (value) {
                this.NL_BASE_URL = value + '/';
            }
        });
    }
    fetchConversation(params) {
        return this.getRequest(this.BASE_URL + 'bot/search', params, { asset: 'bot' });
    }
    searchConversation(params) {
        return this.getRequest(this.BASE_URL + 'bot/search', params, { asset: 'bot' });
    }
    pauseConversation(botId) {
        return this.getRequest(this.BASE_URL + `bot/pause/${botId}`, {}, { asset: 'bot' });
    }
    startConversation(botId) {
        return this.getRequest(this.BASE_URL + `bot/start/${botId}`, {}, { asset: 'bot' });
    }
    deleteConversation(botId) {
        return this.getRequest(this.BASE_URL + `bot/delete/${botId}`, {}, { asset: 'bot' });
    }
    getBotDetails(id) {
        return this.getRequest(this.BASE_URL + `bot/get/${id}`, {}, { asset: 'bot' });
    }
    getCheckStartingMessage(param) {
        return this.getRequest(this.BASE_URL + `bot/getByParam`, param, { asset: 'bot' });
    }
    botCreate(data) {
        return this.postRequest(this.BASE_URL + 'bot', data, { asset: 'bot' });
    }
    botUpdate(id, data) {
        return this.postRequest(this.BASE_URL + `bot/update/${id}`, data, { asset: 'bot' });
    }
    // User Segment APIs
    fetchUserSegment(params) {
        return this.getRequest(this.BASE_URL + 'userSegment/get', params, { asset: 'userSegment' });
    }
    searchUserSegment(params) {
        return this.getRequest(this.BASE_URL + 'userSegment/search', params, { asset: 'userSegment' });
    }
    createUserSegment(data) {
        return this.postSegmentRequest(this.BASE_URL + 'user-segment', data, { asset: 'userSegment' });
    }
    userSegmentQueryBuilder(data) {
        return this.postRequest(this.BASE_URL + 'userSegment/queryBuilder', data, { asset: 'userSegment' });
    }
    // Conversation APIs
    createLogic(data) {
        return this.postRequest(this.BASE_URL + 'conversationLogic', data, { asset: 'conversationLogic' });
    }
    updateLogic(id, data) {
        return this.patchRequest(this.BASE_URL + `conversationLogic/${id}`, data, { asset: 'conversationLogic' });
    }
    deleteLogic(id) {
        return this.deleteRequest(this.BASE_URL + `conversationLogic/${id}`, { asset: 'conversationLogic' });
    }
    // Mis APIs
    uploadFile(obj) {
        return this.postRequest(this.BASE_URL + 'form/upload', this.toFormData(obj));
    }
    readForm(data) {
        return this.postRequest(this.FORM_BASE_URL + 'api/data/v1/form/read', data);
    }
    // Exhaust API
    getJobList(id, params) {
        return this.getRequest(this.DATASET_URL + `request/list/${id}`, params, { asset: 'conversationLogic' });
    }
    getJobInfo(id, params) {
        return this.getRequest(this.DATASET_URL + `request/read/${id}`, params, { asset: 'conversationLogic' });
    }
    submitExhaust(data) {
        return this.postRequest(this.DATASET_URL + `request/submit`, data, { asset: 'conversationLogic' });
    }
    nlSegmentBotMapping(data) {
        return this.postRequest(this.NL_BASE_URL + `segment-bot-mapping`, data);
    }
    submitSegmentData(data) {
        return this.postRequest(this.NL_BASE_URL + `segment-bot-mapping`, data);
    }
};
UciService.ctorParameters = () => [
    { type: HttpClient },
    { type: GlobalService }
];
UciService.ɵprov = i0.ɵɵdefineInjectable({ factory: function UciService_Factory() { return new UciService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.GlobalService)); }, token: UciService, providedIn: "root" });
UciService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], UciService);
export { UciService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWNpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2FtYWdyYS14L3VjaS1jb25zb2xlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3VjaS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUNoRCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGtCQUFrQixDQUFDOzs7O0FBSy9DLElBQWEsVUFBVSxHQUF2QixNQUFhLFVBQVcsU0FBUSxXQUFXO0lBU3ZDLFlBQW1CLElBQWdCLEVBQVMsYUFBNEI7UUFDcEUsS0FBSyxDQUFDLElBQUksRUFBRSxhQUFhLENBQUMsQ0FBQztRQURaLFNBQUksR0FBSixJQUFJLENBQVk7UUFBUyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUZ4RSxrQkFBYSxHQUFHLDRCQUE0QixDQUFDO1FBSXpDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMxQyxJQUFJLEtBQUssRUFBRTtnQkFDUCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssR0FBRyxTQUFTLENBQUM7Z0JBQ2xDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxHQUFHLFlBQVksQ0FBQztnQkFDeEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLEdBQUcsWUFBWSxDQUFDO2dCQUV4QyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsY0FBYyxDQUFDO2FBQzdEO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDNUMsSUFBSSxLQUFLLEVBQUU7Z0JBQ1AsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLEdBQUcsR0FBRyxDQUFDO2FBQ2xDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsaUJBQWlCLENBQUMsTUFBTTtRQUNwQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxZQUFZLEVBQUUsTUFBTSxFQUFFLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7SUFDakYsQ0FBQztJQUVELGtCQUFrQixDQUFDLE1BQU07UUFDckIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsWUFBWSxFQUFFLE1BQU0sRUFBRSxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO0lBQ2pGLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxLQUFLO1FBQ25CLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLGFBQWEsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7SUFDckYsQ0FBQztJQUVELGlCQUFpQixDQUFDLEtBQUs7UUFDbkIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsYUFBYSxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQztJQUNyRixDQUFDO0lBRUQsa0JBQWtCLENBQUMsS0FBSztRQUNwQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxjQUFjLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO0lBQ3RGLENBQUM7SUFFRCxhQUFhLENBQUMsRUFBRTtRQUNaLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLFdBQVcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7SUFDaEYsQ0FBQztJQUVELHVCQUF1QixDQUFDLEtBQUs7UUFDekIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7SUFDcEYsQ0FBQztJQUVELFNBQVMsQ0FBQyxJQUFJO1FBQ1YsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFRCxTQUFTLENBQUMsRUFBRSxFQUFFLElBQUk7UUFDZCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxjQUFjLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO0lBQ3RGLENBQUM7SUFFRCxvQkFBb0I7SUFDcEIsZ0JBQWdCLENBQUMsTUFBTTtRQUNuQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsRUFBQyxLQUFLLEVBQUUsYUFBYSxFQUFDLENBQUMsQ0FBQztJQUM5RixDQUFDO0lBRUQsaUJBQWlCLENBQUMsTUFBTTtRQUNwQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsRUFBQyxLQUFLLEVBQUUsYUFBYSxFQUFDLENBQUMsQ0FBQztJQUNqRyxDQUFDO0lBRUQsaUJBQWlCLENBQUMsSUFBSTtRQUNsQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLGNBQWMsRUFBRSxJQUFJLEVBQUUsRUFBQyxLQUFLLEVBQUUsYUFBYSxFQUFDLENBQUMsQ0FBQztJQUNqRyxDQUFDO0lBRUQsdUJBQXVCLENBQUMsSUFBSTtRQUN4QixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRywwQkFBMEIsRUFBRSxJQUFJLEVBQUUsRUFBQyxLQUFLLEVBQUUsYUFBYSxFQUFDLENBQUMsQ0FBQztJQUN0RyxDQUFDO0lBRUQsb0JBQW9CO0lBQ3BCLFdBQVcsQ0FBQyxJQUFJO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsbUJBQW1CLEVBQUUsSUFBSSxFQUFFLEVBQUMsS0FBSyxFQUFFLG1CQUFtQixFQUFDLENBQUMsQ0FBQztJQUNyRyxDQUFDO0lBRUQsV0FBVyxDQUFDLEVBQUUsRUFBRSxJQUFJO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLHFCQUFxQixFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBQyxLQUFLLEVBQUUsbUJBQW1CLEVBQUMsQ0FBQyxDQUFDO0lBQzVHLENBQUM7SUFFRCxXQUFXLENBQUMsRUFBRTtRQUNWLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLHFCQUFxQixFQUFFLEVBQUUsRUFBRSxFQUFDLEtBQUssRUFBRSxtQkFBbUIsRUFBQyxDQUFDLENBQUM7SUFDdkcsQ0FBQztJQUVELFdBQVc7SUFDWCxVQUFVLENBQUMsR0FBRztRQUNWLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLGFBQWEsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDakYsQ0FBQztJQUVELFFBQVEsQ0FBQyxJQUFJO1FBQ1QsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDaEYsQ0FBQztJQUVELGNBQWM7SUFDZCxVQUFVLENBQUMsRUFBRSxFQUFFLE1BQU07UUFDakIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsZ0JBQWdCLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFDLEtBQUssRUFBRSxtQkFBbUIsRUFBQyxDQUFDLENBQUM7SUFDMUcsQ0FBQztJQUVELFVBQVUsQ0FBQyxFQUFFLEVBQUUsTUFBTTtRQUNqQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUMsS0FBSyxFQUFFLG1CQUFtQixFQUFDLENBQUMsQ0FBQztJQUMxRyxDQUFDO0lBRUQsYUFBYSxDQUFDLElBQUk7UUFDZCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsRUFBQyxLQUFLLEVBQUUsbUJBQW1CLEVBQUMsQ0FBQyxDQUFDO0lBQ3JHLENBQUM7SUFFRCxtQkFBbUIsQ0FBQyxJQUFJO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLHFCQUFxQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxJQUFJO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLHFCQUFxQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVFLENBQUM7Q0FDSixDQUFBOztZQWpINEIsVUFBVTtZQUF3QixhQUFhOzs7QUFUL0QsVUFBVTtJQUh0QixVQUFVLENBQUM7UUFDUixVQUFVLEVBQUUsTUFBTTtLQUNyQixDQUFDO0dBQ1csVUFBVSxDQTBIdEI7U0ExSFksVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7QmFzZVNlcnZpY2V9IGZyb20gJy4vYmFzZS5zZXJ2aWNlJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0dsb2JhbFNlcnZpY2V9IGZyb20gJy4vZ2xvYmFsLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFVjaVNlcnZpY2UgZXh0ZW5kcyBCYXNlU2VydmljZSB7XG4gICAgQkFTRV9VUkw7XG4gICAgQkFTRV9VUkxfVjE7XG4gICAgQkFTRV9VUkxfVjI7XG5cbiAgICBOTF9CQVNFX1VSTDtcbiAgICBEQVRBU0VUX1VSTDtcbiAgICBGT1JNX0JBU0VfVVJMID0gJ2h0dHBzOi8vZGV2LnN1bmJpcmRlZC5vcmcvJztcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBodHRwOiBIdHRwQ2xpZW50LCBwdWJsaWMgZ2xvYmFsU2VydmljZTogR2xvYmFsU2VydmljZSkge1xuICAgICAgICBzdXBlcihodHRwLCBnbG9iYWxTZXJ2aWNlKTtcbiAgICAgICAgdGhpcy5nbG9iYWxTZXJ2aWNlLmJhc2VVcmwkLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLkJBU0VfVVJMID0gdmFsdWUgKyAnL2FkbWluLyc7XG4gICAgICAgICAgICAgICAgdGhpcy5CQVNFX1VSTF9WMSA9IHZhbHVlICsgJy9hZG1pbi92MS8nO1xuICAgICAgICAgICAgICAgIHRoaXMuQkFTRV9VUkxfVjIgPSB2YWx1ZSArICcvYWRtaW4vdjIvJztcblxuICAgICAgICAgICAgICAgIHRoaXMuREFUQVNFVF9VUkwgPSB2YWx1ZS5yZXBsYWNlKCcvdWNpJykgKyAnL2RhdGFzZXQvdjEvJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZ2xvYmFsU2VydmljZS5ubEJhc2VVcmwkLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLk5MX0JBU0VfVVJMID0gdmFsdWUgKyAnLyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZldGNoQ29udmVyc2F0aW9uKHBhcmFtcyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFJlcXVlc3QodGhpcy5CQVNFX1VSTCArICdib3Qvc2VhcmNoJywgcGFyYW1zLCB7YXNzZXQ6ICdib3QnfSk7XG4gICAgfVxuXG4gICAgc2VhcmNoQ29udmVyc2F0aW9uKHBhcmFtcyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFJlcXVlc3QodGhpcy5CQVNFX1VSTCArICdib3Qvc2VhcmNoJywgcGFyYW1zLCB7YXNzZXQ6ICdib3QnfSk7XG4gICAgfVxuXG4gICAgcGF1c2VDb252ZXJzYXRpb24oYm90SWQpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRSZXF1ZXN0KHRoaXMuQkFTRV9VUkwgKyBgYm90L3BhdXNlLyR7Ym90SWR9YCwge30sIHthc3NldDogJ2JvdCd9KTtcbiAgICB9XG5cbiAgICBzdGFydENvbnZlcnNhdGlvbihib3RJZCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFJlcXVlc3QodGhpcy5CQVNFX1VSTCArIGBib3Qvc3RhcnQvJHtib3RJZH1gLCB7fSwge2Fzc2V0OiAnYm90J30pO1xuICAgIH1cblxuICAgIGRlbGV0ZUNvbnZlcnNhdGlvbihib3RJZCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFJlcXVlc3QodGhpcy5CQVNFX1VSTCArIGBib3QvZGVsZXRlLyR7Ym90SWR9YCwge30sIHthc3NldDogJ2JvdCd9KTtcbiAgICB9XG5cbiAgICBnZXRCb3REZXRhaWxzKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFJlcXVlc3QodGhpcy5CQVNFX1VSTCArIGBib3QvZ2V0LyR7aWR9YCwge30sIHthc3NldDogJ2JvdCd9KTtcbiAgICB9XG5cbiAgICBnZXRDaGVja1N0YXJ0aW5nTWVzc2FnZShwYXJhbSkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRSZXF1ZXN0KHRoaXMuQkFTRV9VUkwgKyBgYm90L2dldEJ5UGFyYW1gLCBwYXJhbSwge2Fzc2V0OiAnYm90J30pO1xuICAgIH1cblxuICAgIGJvdENyZWF0ZShkYXRhKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc3RSZXF1ZXN0KHRoaXMuQkFTRV9VUkwgKyAnYm90JywgZGF0YSwge2Fzc2V0OiAnYm90J30pO1xuICAgIH1cblxuICAgIGJvdFVwZGF0ZShpZCwgZGF0YSkge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3N0UmVxdWVzdCh0aGlzLkJBU0VfVVJMICsgYGJvdC91cGRhdGUvJHtpZH1gLCBkYXRhLCB7YXNzZXQ6ICdib3QnfSk7XG4gICAgfVxuXG4gICAgLy8gVXNlciBTZWdtZW50IEFQSXNcbiAgICBmZXRjaFVzZXJTZWdtZW50KHBhcmFtcyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFJlcXVlc3QodGhpcy5CQVNFX1VSTCArICd1c2VyU2VnbWVudC9nZXQnLCBwYXJhbXMsIHthc3NldDogJ3VzZXJTZWdtZW50J30pO1xuICAgIH1cblxuICAgIHNlYXJjaFVzZXJTZWdtZW50KHBhcmFtcyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFJlcXVlc3QodGhpcy5CQVNFX1VSTCArICd1c2VyU2VnbWVudC9zZWFyY2gnLCBwYXJhbXMsIHthc3NldDogJ3VzZXJTZWdtZW50J30pO1xuICAgIH1cblxuICAgIGNyZWF0ZVVzZXJTZWdtZW50KGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zdFNlZ21lbnRSZXF1ZXN0KHRoaXMuQkFTRV9VUkwgKyAndXNlci1zZWdtZW50JywgZGF0YSwge2Fzc2V0OiAndXNlclNlZ21lbnQnfSk7XG4gICAgfVxuXG4gICAgdXNlclNlZ21lbnRRdWVyeUJ1aWxkZXIoZGF0YSkge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3N0UmVxdWVzdCh0aGlzLkJBU0VfVVJMICsgJ3VzZXJTZWdtZW50L3F1ZXJ5QnVpbGRlcicsIGRhdGEsIHthc3NldDogJ3VzZXJTZWdtZW50J30pO1xuICAgIH1cblxuICAgIC8vIENvbnZlcnNhdGlvbiBBUElzXG4gICAgY3JlYXRlTG9naWMoZGF0YSkge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3N0UmVxdWVzdCh0aGlzLkJBU0VfVVJMICsgJ2NvbnZlcnNhdGlvbkxvZ2ljJywgZGF0YSwge2Fzc2V0OiAnY29udmVyc2F0aW9uTG9naWMnfSk7XG4gICAgfVxuXG4gICAgdXBkYXRlTG9naWMoaWQsIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGF0Y2hSZXF1ZXN0KHRoaXMuQkFTRV9VUkwgKyBgY29udmVyc2F0aW9uTG9naWMvJHtpZH1gLCBkYXRhLCB7YXNzZXQ6ICdjb252ZXJzYXRpb25Mb2dpYyd9KTtcbiAgICB9XG5cbiAgICBkZWxldGVMb2dpYyhpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWxldGVSZXF1ZXN0KHRoaXMuQkFTRV9VUkwgKyBgY29udmVyc2F0aW9uTG9naWMvJHtpZH1gLCB7YXNzZXQ6ICdjb252ZXJzYXRpb25Mb2dpYyd9KTtcbiAgICB9XG5cbiAgICAvLyBNaXMgQVBJc1xuICAgIHVwbG9hZEZpbGUob2JqKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zdFJlcXVlc3QodGhpcy5CQVNFX1VSTCArICdmb3JtL3VwbG9hZCcsIHRoaXMudG9Gb3JtRGF0YShvYmopKTtcbiAgICB9XG5cbiAgICByZWFkRm9ybShkYXRhKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc3RSZXF1ZXN0KHRoaXMuRk9STV9CQVNFX1VSTCArICdhcGkvZGF0YS92MS9mb3JtL3JlYWQnLCBkYXRhKTtcbiAgICB9XG5cbiAgICAvLyBFeGhhdXN0IEFQSVxuICAgIGdldEpvYkxpc3QoaWQsIHBhcmFtcykge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRSZXF1ZXN0KHRoaXMuREFUQVNFVF9VUkwgKyBgcmVxdWVzdC9saXN0LyR7aWR9YCwgcGFyYW1zLCB7YXNzZXQ6ICdjb252ZXJzYXRpb25Mb2dpYyd9KTtcbiAgICB9XG5cbiAgICBnZXRKb2JJbmZvKGlkLCBwYXJhbXMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UmVxdWVzdCh0aGlzLkRBVEFTRVRfVVJMICsgYHJlcXVlc3QvcmVhZC8ke2lkfWAsIHBhcmFtcywge2Fzc2V0OiAnY29udmVyc2F0aW9uTG9naWMnfSk7XG4gICAgfVxuXG4gICAgc3VibWl0RXhoYXVzdChkYXRhKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc3RSZXF1ZXN0KHRoaXMuREFUQVNFVF9VUkwgKyBgcmVxdWVzdC9zdWJtaXRgLCBkYXRhLCB7YXNzZXQ6ICdjb252ZXJzYXRpb25Mb2dpYyd9KTtcbiAgICB9XG5cbiAgICBubFNlZ21lbnRCb3RNYXBwaW5nKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zdFJlcXVlc3QodGhpcy5OTF9CQVNFX1VSTCArIGBzZWdtZW50LWJvdC1tYXBwaW5nYCwgZGF0YSk7XG4gICAgfVxuXG4gICAgc3VibWl0U2VnbWVudERhdGEoZGF0YSkge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3N0UmVxdWVzdCh0aGlzLk5MX0JBU0VfVVJMICsgYHNlZ21lbnQtYm90LW1hcHBpbmdgLCBkYXRhKTtcbiAgICB9XG59XG4iXX0=