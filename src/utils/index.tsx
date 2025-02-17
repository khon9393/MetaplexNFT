import { format } from 'date-fns';

// Concatenates classes into a single className string
const cn = (...args: string[]) => args.join(' ');

const formatDate = (date: string) => format(new Date(date), 'MM/dd/yyyy h:mm:ss');

/**
 * Formats number as currency string.
 *
 * @param number Number to format.
 */
const numberToCurrencyString = (number: number) =>
    number.toLocaleString('en-US');

/**
 * Returns a number whose value is limited to the given range.
 *
 * Example: limit the output of this computation to between 0 and 255
 * (x * 255).clamp(0, 255)
 *
 * @param {Number} min The lower boundary of the output range
 * @param {Number} max The upper boundary of the output range
 * @returns A number in the range [min, max]
 * @type Number
 */
const clamp = (current, min, max) => Math.min(Math.max(current, min), max);

export {
    cn,
    formatDate,
    numberToCurrencyString,
    clamp,
};

export interface Assets {
  items: [
    {
      id: string,
      content: {
        json_uri: string,
        metadata: {
          name: string;
          description: string;
          attributes: { value: string; trait_type: string }[];
          symbol: string;
        };
        files?: [{ uri: string }];
        links?: { external_url: string; image: string };
      }
    }],
}
    
  export interface Asset {
    id: string;
    content: {
        metadata: {
            name: string;
            description: string;
            attributes: {
                value: string;
                trait_type: string;
            }[];
            symbol: string;
        };
        files?: [{
            uri: string;
        }];
        links?: {
            external_url: string;
            image: string;
        };
        json_uri: string;
    };
   
  }

    // authorities: { address: string; scopes: string[] }[];
  // compression: {
  //   eligible: boolean;
  //   compressed: boolean;
  //   data_hash: string;
  //   creator_hash: string;
  //   asset_hash: string;
  //   tree: string;
  //   seq: number;
  //   leaf_id: number;
  // };
  // grouping: { group_key: string; group_value: string }[];
  // royalty: {
  //   royalty_model: string;
  //   target: string | null;
  //   percent: number;
  //   basis_points: number;
  //   primary_sale_happened: boolean;
  //   locked: boolean;
  // };
  // creators: any[];
  // ownership: {
  //   frozen: boolean;
  //   delegated: boolean;
  //   delegate: string | null;
  //   ownership_model: string;
  //   owner: string;
  // };
  // mutable: boolean;
  // burnt: boolean;
  // plugins: any;
  // mpl_core_info: { plugins_json_version: number };
  // external_plugins: any[];