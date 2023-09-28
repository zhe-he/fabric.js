import type { ObjectEvents } from '../../EventTypeDefs';
import { FabricObjectSVGExportMixin } from './FabricObjectSVGExportMixin';
import { InteractiveFabricObject } from './InteractiveObject';
import { applyMixins } from '../../util/applyMixins';
import type { FabricObjectProps } from './types/FabricObjectProps';
import type { TFabricObjectProps, SerializedObjectProps } from './types';
import { classRegistry } from '../../ClassRegistry';

// TODO somehow we have to make a tree-shakeable import

// eslint-disable-next-line @typescript-eslint/no-empty-interface, @typescript-eslint/no-unused-vars
export interface FabricObject<
  Props extends TFabricObjectProps = Partial<FabricObjectProps>,
  SProps extends SerializedObjectProps = SerializedObjectProps,
  EventSpec extends ObjectEvents = ObjectEvents
> extends FabricObjectSVGExportMixin {}

export class FabricObject<
  Props extends TFabricObjectProps = Partial<FabricObjectProps>,
  SProps extends SerializedObjectProps = SerializedObjectProps,
  EventSpec extends ObjectEvents = ObjectEvents
> extends InteractiveFabricObject<Props, SProps, EventSpec> {}

applyMixins(FabricObject, [FabricObjectSVGExportMixin]);

classRegistry.setClass(FabricObject);
classRegistry.setClass(FabricObject, 'object');

export { cacheProperties } from './defaultValues';

/**
 * @deprecated The old fabric.Object class can't be imported as Object because of conflict with the JS api
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
 * For this reason it has been renamed to FabricObject.
 * Please use `import { FabricObject }` in place of `import { Object as FabricObject }`
 */
export class _Object extends FabricObject {}
