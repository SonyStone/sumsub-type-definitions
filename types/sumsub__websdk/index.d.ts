import { asapScheduler } from "rxjs";

export const websdk: Function;
export default websdk;


// enum SumsubApiUrl {
//   Sandbox = 'https://test-api.sumsub.com',
//   Production = 'https://api.sumsub.com',
// }

// export interface SumsubConf {

// }

// export enum MessageType {
//   /** WebSDK resources have been loaded */
//   onReady = 'idCheck.onReady',
//   /** The first screen is rendered */
//   onInitialized = 'idCheck.onInitialized',
//   /** A screen with that corresponds to '$idDocSetType' was shown */
//   onStepInitiated = 'idCheck.onStepInitiated',
//   /** Step '$idDocSetType' has been completed */
//   stepCompleted = 'idCheck.stepCompleted',
//   /** Applicant with id $id has been loaded */
//   onApplicantLoaded = 'idCheck.onApplicantLoaded',
//   /** Documents were submitted for verification */
//   onApplicantSubmitted = 'idCheck.onApplicantSubmitted',
//   /** Applicant status has been changed */
//   applicantStatus = 'idCheck.applicantStatus',
//   /** Documents were re-submitted for verification */
//   onApplicantResubmitted = 'idCheck.onApplicantResubmitted',
//   /** Applicant action was submitted */
//   onActionSubmitted = 'idCheck.onActionSubmitted',
//   /** Applicant action $id was completed */
//   actionCompleted = 'idCheck.actionCompleted',
// }

// export interface SumSubBuilder {
//   Builder(apiUrl: SumsubApiUrl, flowName: string): SumSubFactory;
// }

// export type ExpirationHandler = (newAccessTokenCallback: (newAccessToken: string) => void) => void;

// export interface SumSubFactory {
//   accessToken: string;
//   baseUrl: SumsubApiUrl;
//   config: SumsubConf;
//   debug: boolean;
//   expirationHandler: ExpirationHandler;
//   flowName: string;
//   options: {
//     adaptIframeHeight: boolean;
//     addViewportTag: boolean;
//   };
//   build(): any;
//   // wut?
//   // debug(e: any): any;
//   withAccessToken(accessToken: string, expirationHandler: ExpirationHandler): this;
//   withConf(conf: any): this;
//   withOptions(options: any): this;
// }

// export interface SumSubInstance {
//   baseUrl: string;
//   callbacks: any;
//   config: SumsubConf;
//   iframe: HTMLIFrameElement;
//   iframeId: string;
//   options: {
//     adaptIframeHeight: boolean;
//     addViewportTag: boolean;
//     debug: boolean;
//   };
//   sessionId: string;
//   addViewportTag(): any;
//   createIframe(e: any): any;
//   getIframeSrc(): any;
//   /**
//    * just launch the WebSDK by providing the container element for it
//    * @param element the container element
//    */
//   launch(element: string): void;
//   onSdkMessage(e: any): void;
//   registerEventLisner(): void;
//   updateAccessToken(e: string): void;
// }
  



// export = websdk;
// export default SumSub.SumSubBuilder;
