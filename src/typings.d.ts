declare module 'exif-js' {

    interface Tags {
      [key: number]: string;
    }
  
    interface StringValues {
      [key: string]: Tags;
    }
  
    interface EXIFStatic<T> {
      EXIFwrapped: T;
      Tags: Tags;
      TiffTags: Tags;
      GPSTags: Tags;
      IFD1Tag: Tags;
      StringValues : StringValues;
      isXmpEnabled: boolean;
      new<R>(obj: R): EXIFStatic<R>;
      enableXmp(): void;
      disableXmp(): void;
      getData(img: HTMLImageElement, callback: () => void): boolean;
      getTag(img, tag): any;
      getIptcTag(img, tag): any;
      getAllTags(img): any;
      getAllIptcTags(img): any;
      pretty(img): string;
      readFromBinaryFile(file: ArrayBuffer): { [key: string]: any; } | false;
    }
  
    const EXIF: EXIFStatic<any>;
    export = EXIF;
  
  }