
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model MYSQL1
 * 
 */
export type MYSQL1 = $Result.DefaultSelection<Prisma.$MYSQL1Payload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more MYSQL1s
 * const mYSQL1s = await prisma.mYSQL1.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more MYSQL1s
   * const mYSQL1s = await prisma.mYSQL1.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.mYSQL1`: Exposes CRUD operations for the **MYSQL1** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MYSQL1s
    * const mYSQL1s = await prisma.mYSQL1.findMany()
    * ```
    */
  get mYSQL1(): Prisma.MYSQL1Delegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.15.1
   * Query Engine version: 5675a3182f972f1a8f31d16eee6abf4fd54910e3
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    MYSQL1: 'MYSQL1'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'mYSQL1'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      MYSQL1: {
        payload: Prisma.$MYSQL1Payload<ExtArgs>
        fields: Prisma.MYSQL1FieldRefs
        operations: {
          findUnique: {
            args: Prisma.MYSQL1FindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MYSQL1Payload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MYSQL1FindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MYSQL1Payload>
          }
          findFirst: {
            args: Prisma.MYSQL1FindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MYSQL1Payload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MYSQL1FindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MYSQL1Payload>
          }
          findMany: {
            args: Prisma.MYSQL1FindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MYSQL1Payload>[]
          }
          create: {
            args: Prisma.MYSQL1CreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MYSQL1Payload>
          }
          createMany: {
            args: Prisma.MYSQL1CreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MYSQL1CreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MYSQL1Payload>[]
          }
          delete: {
            args: Prisma.MYSQL1DeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MYSQL1Payload>
          }
          update: {
            args: Prisma.MYSQL1UpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MYSQL1Payload>
          }
          deleteMany: {
            args: Prisma.MYSQL1DeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MYSQL1UpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MYSQL1UpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MYSQL1Payload>
          }
          aggregate: {
            args: Prisma.MYSQL1AggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMYSQL1>
          }
          groupBy: {
            args: Prisma.MYSQL1GroupByArgs<ExtArgs>,
            result: $Utils.Optional<MYSQL1GroupByOutputType>[]
          }
          count: {
            args: Prisma.MYSQL1CountArgs<ExtArgs>,
            result: $Utils.Optional<MYSQL1CountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model MYSQL1
   */

  export type AggregateMYSQL1 = {
    _count: MYSQL1CountAggregateOutputType | null
    _avg: MYSQL1AvgAggregateOutputType | null
    _sum: MYSQL1SumAggregateOutputType | null
    _min: MYSQL1MinAggregateOutputType | null
    _max: MYSQL1MaxAggregateOutputType | null
  }

  export type MYSQL1AvgAggregateOutputType = {
    id: number | null
  }

  export type MYSQL1SumAggregateOutputType = {
    id: number | null
  }

  export type MYSQL1MinAggregateOutputType = {
    id: number | null
    modal: string | null
  }

  export type MYSQL1MaxAggregateOutputType = {
    id: number | null
    modal: string | null
  }

  export type MYSQL1CountAggregateOutputType = {
    id: number
    modal: number
    _all: number
  }


  export type MYSQL1AvgAggregateInputType = {
    id?: true
  }

  export type MYSQL1SumAggregateInputType = {
    id?: true
  }

  export type MYSQL1MinAggregateInputType = {
    id?: true
    modal?: true
  }

  export type MYSQL1MaxAggregateInputType = {
    id?: true
    modal?: true
  }

  export type MYSQL1CountAggregateInputType = {
    id?: true
    modal?: true
    _all?: true
  }

  export type MYSQL1AggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MYSQL1 to aggregate.
     */
    where?: MYSQL1WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MYSQL1s to fetch.
     */
    orderBy?: MYSQL1OrderByWithRelationInput | MYSQL1OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MYSQL1WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MYSQL1s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MYSQL1s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MYSQL1s
    **/
    _count?: true | MYSQL1CountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MYSQL1AvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MYSQL1SumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MYSQL1MinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MYSQL1MaxAggregateInputType
  }

  export type GetMYSQL1AggregateType<T extends MYSQL1AggregateArgs> = {
        [P in keyof T & keyof AggregateMYSQL1]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMYSQL1[P]>
      : GetScalarType<T[P], AggregateMYSQL1[P]>
  }




  export type MYSQL1GroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MYSQL1WhereInput
    orderBy?: MYSQL1OrderByWithAggregationInput | MYSQL1OrderByWithAggregationInput[]
    by: MYSQL1ScalarFieldEnum[] | MYSQL1ScalarFieldEnum
    having?: MYSQL1ScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MYSQL1CountAggregateInputType | true
    _avg?: MYSQL1AvgAggregateInputType
    _sum?: MYSQL1SumAggregateInputType
    _min?: MYSQL1MinAggregateInputType
    _max?: MYSQL1MaxAggregateInputType
  }

  export type MYSQL1GroupByOutputType = {
    id: number
    modal: string
    _count: MYSQL1CountAggregateOutputType | null
    _avg: MYSQL1AvgAggregateOutputType | null
    _sum: MYSQL1SumAggregateOutputType | null
    _min: MYSQL1MinAggregateOutputType | null
    _max: MYSQL1MaxAggregateOutputType | null
  }

  type GetMYSQL1GroupByPayload<T extends MYSQL1GroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MYSQL1GroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MYSQL1GroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MYSQL1GroupByOutputType[P]>
            : GetScalarType<T[P], MYSQL1GroupByOutputType[P]>
        }
      >
    >


  export type MYSQL1Select<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modal?: boolean
  }, ExtArgs["result"]["mYSQL1"]>

  export type MYSQL1SelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modal?: boolean
  }, ExtArgs["result"]["mYSQL1"]>

  export type MYSQL1SelectScalar = {
    id?: boolean
    modal?: boolean
  }


  export type $MYSQL1Payload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MYSQL1"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      modal: string
    }, ExtArgs["result"]["mYSQL1"]>
    composites: {}
  }

  type MYSQL1GetPayload<S extends boolean | null | undefined | MYSQL1DefaultArgs> = $Result.GetResult<Prisma.$MYSQL1Payload, S>

  type MYSQL1CountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MYSQL1FindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MYSQL1CountAggregateInputType | true
    }

  export interface MYSQL1Delegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MYSQL1'], meta: { name: 'MYSQL1' } }
    /**
     * Find zero or one MYSQL1 that matches the filter.
     * @param {MYSQL1FindUniqueArgs} args - Arguments to find a MYSQL1
     * @example
     * // Get one MYSQL1
     * const mYSQL1 = await prisma.mYSQL1.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MYSQL1FindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MYSQL1FindUniqueArgs<ExtArgs>>
    ): Prisma__MYSQL1Client<$Result.GetResult<Prisma.$MYSQL1Payload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one MYSQL1 that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MYSQL1FindUniqueOrThrowArgs} args - Arguments to find a MYSQL1
     * @example
     * // Get one MYSQL1
     * const mYSQL1 = await prisma.mYSQL1.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MYSQL1FindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MYSQL1FindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MYSQL1Client<$Result.GetResult<Prisma.$MYSQL1Payload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first MYSQL1 that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MYSQL1FindFirstArgs} args - Arguments to find a MYSQL1
     * @example
     * // Get one MYSQL1
     * const mYSQL1 = await prisma.mYSQL1.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MYSQL1FindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MYSQL1FindFirstArgs<ExtArgs>>
    ): Prisma__MYSQL1Client<$Result.GetResult<Prisma.$MYSQL1Payload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first MYSQL1 that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MYSQL1FindFirstOrThrowArgs} args - Arguments to find a MYSQL1
     * @example
     * // Get one MYSQL1
     * const mYSQL1 = await prisma.mYSQL1.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MYSQL1FindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MYSQL1FindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MYSQL1Client<$Result.GetResult<Prisma.$MYSQL1Payload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more MYSQL1s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MYSQL1FindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MYSQL1s
     * const mYSQL1s = await prisma.mYSQL1.findMany()
     * 
     * // Get first 10 MYSQL1s
     * const mYSQL1s = await prisma.mYSQL1.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mYSQL1WithIdOnly = await prisma.mYSQL1.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MYSQL1FindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MYSQL1FindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MYSQL1Payload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a MYSQL1.
     * @param {MYSQL1CreateArgs} args - Arguments to create a MYSQL1.
     * @example
     * // Create one MYSQL1
     * const MYSQL1 = await prisma.mYSQL1.create({
     *   data: {
     *     // ... data to create a MYSQL1
     *   }
     * })
     * 
    **/
    create<T extends MYSQL1CreateArgs<ExtArgs>>(
      args: SelectSubset<T, MYSQL1CreateArgs<ExtArgs>>
    ): Prisma__MYSQL1Client<$Result.GetResult<Prisma.$MYSQL1Payload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many MYSQL1s.
     * @param {MYSQL1CreateManyArgs} args - Arguments to create many MYSQL1s.
     * @example
     * // Create many MYSQL1s
     * const mYSQL1 = await prisma.mYSQL1.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends MYSQL1CreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MYSQL1CreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MYSQL1s and returns the data saved in the database.
     * @param {MYSQL1CreateManyAndReturnArgs} args - Arguments to create many MYSQL1s.
     * @example
     * // Create many MYSQL1s
     * const mYSQL1 = await prisma.mYSQL1.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MYSQL1s and only return the `id`
     * const mYSQL1WithIdOnly = await prisma.mYSQL1.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends MYSQL1CreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, MYSQL1CreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MYSQL1Payload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a MYSQL1.
     * @param {MYSQL1DeleteArgs} args - Arguments to delete one MYSQL1.
     * @example
     * // Delete one MYSQL1
     * const MYSQL1 = await prisma.mYSQL1.delete({
     *   where: {
     *     // ... filter to delete one MYSQL1
     *   }
     * })
     * 
    **/
    delete<T extends MYSQL1DeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MYSQL1DeleteArgs<ExtArgs>>
    ): Prisma__MYSQL1Client<$Result.GetResult<Prisma.$MYSQL1Payload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one MYSQL1.
     * @param {MYSQL1UpdateArgs} args - Arguments to update one MYSQL1.
     * @example
     * // Update one MYSQL1
     * const mYSQL1 = await prisma.mYSQL1.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MYSQL1UpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MYSQL1UpdateArgs<ExtArgs>>
    ): Prisma__MYSQL1Client<$Result.GetResult<Prisma.$MYSQL1Payload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more MYSQL1s.
     * @param {MYSQL1DeleteManyArgs} args - Arguments to filter MYSQL1s to delete.
     * @example
     * // Delete a few MYSQL1s
     * const { count } = await prisma.mYSQL1.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MYSQL1DeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MYSQL1DeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MYSQL1s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MYSQL1UpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MYSQL1s
     * const mYSQL1 = await prisma.mYSQL1.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MYSQL1UpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MYSQL1UpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MYSQL1.
     * @param {MYSQL1UpsertArgs} args - Arguments to update or create a MYSQL1.
     * @example
     * // Update or create a MYSQL1
     * const mYSQL1 = await prisma.mYSQL1.upsert({
     *   create: {
     *     // ... data to create a MYSQL1
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MYSQL1 we want to update
     *   }
     * })
    **/
    upsert<T extends MYSQL1UpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MYSQL1UpsertArgs<ExtArgs>>
    ): Prisma__MYSQL1Client<$Result.GetResult<Prisma.$MYSQL1Payload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of MYSQL1s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MYSQL1CountArgs} args - Arguments to filter MYSQL1s to count.
     * @example
     * // Count the number of MYSQL1s
     * const count = await prisma.mYSQL1.count({
     *   where: {
     *     // ... the filter for the MYSQL1s we want to count
     *   }
     * })
    **/
    count<T extends MYSQL1CountArgs>(
      args?: Subset<T, MYSQL1CountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MYSQL1CountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MYSQL1.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MYSQL1AggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MYSQL1AggregateArgs>(args: Subset<T, MYSQL1AggregateArgs>): Prisma.PrismaPromise<GetMYSQL1AggregateType<T>>

    /**
     * Group by MYSQL1.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MYSQL1GroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MYSQL1GroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MYSQL1GroupByArgs['orderBy'] }
        : { orderBy?: MYSQL1GroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MYSQL1GroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMYSQL1GroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MYSQL1 model
   */
  readonly fields: MYSQL1FieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MYSQL1.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MYSQL1Client<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the MYSQL1 model
   */ 
  interface MYSQL1FieldRefs {
    readonly id: FieldRef<"MYSQL1", 'Int'>
    readonly modal: FieldRef<"MYSQL1", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MYSQL1 findUnique
   */
  export type MYSQL1FindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MYSQL1
     */
    select?: MYSQL1Select<ExtArgs> | null
    /**
     * Filter, which MYSQL1 to fetch.
     */
    where: MYSQL1WhereUniqueInput
  }

  /**
   * MYSQL1 findUniqueOrThrow
   */
  export type MYSQL1FindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MYSQL1
     */
    select?: MYSQL1Select<ExtArgs> | null
    /**
     * Filter, which MYSQL1 to fetch.
     */
    where: MYSQL1WhereUniqueInput
  }

  /**
   * MYSQL1 findFirst
   */
  export type MYSQL1FindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MYSQL1
     */
    select?: MYSQL1Select<ExtArgs> | null
    /**
     * Filter, which MYSQL1 to fetch.
     */
    where?: MYSQL1WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MYSQL1s to fetch.
     */
    orderBy?: MYSQL1OrderByWithRelationInput | MYSQL1OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MYSQL1s.
     */
    cursor?: MYSQL1WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MYSQL1s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MYSQL1s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MYSQL1s.
     */
    distinct?: MYSQL1ScalarFieldEnum | MYSQL1ScalarFieldEnum[]
  }

  /**
   * MYSQL1 findFirstOrThrow
   */
  export type MYSQL1FindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MYSQL1
     */
    select?: MYSQL1Select<ExtArgs> | null
    /**
     * Filter, which MYSQL1 to fetch.
     */
    where?: MYSQL1WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MYSQL1s to fetch.
     */
    orderBy?: MYSQL1OrderByWithRelationInput | MYSQL1OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MYSQL1s.
     */
    cursor?: MYSQL1WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MYSQL1s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MYSQL1s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MYSQL1s.
     */
    distinct?: MYSQL1ScalarFieldEnum | MYSQL1ScalarFieldEnum[]
  }

  /**
   * MYSQL1 findMany
   */
  export type MYSQL1FindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MYSQL1
     */
    select?: MYSQL1Select<ExtArgs> | null
    /**
     * Filter, which MYSQL1s to fetch.
     */
    where?: MYSQL1WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MYSQL1s to fetch.
     */
    orderBy?: MYSQL1OrderByWithRelationInput | MYSQL1OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MYSQL1s.
     */
    cursor?: MYSQL1WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MYSQL1s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MYSQL1s.
     */
    skip?: number
    distinct?: MYSQL1ScalarFieldEnum | MYSQL1ScalarFieldEnum[]
  }

  /**
   * MYSQL1 create
   */
  export type MYSQL1CreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MYSQL1
     */
    select?: MYSQL1Select<ExtArgs> | null
    /**
     * The data needed to create a MYSQL1.
     */
    data: XOR<MYSQL1CreateInput, MYSQL1UncheckedCreateInput>
  }

  /**
   * MYSQL1 createMany
   */
  export type MYSQL1CreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MYSQL1s.
     */
    data: MYSQL1CreateManyInput | MYSQL1CreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MYSQL1 createManyAndReturn
   */
  export type MYSQL1CreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MYSQL1
     */
    select?: MYSQL1SelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many MYSQL1s.
     */
    data: MYSQL1CreateManyInput | MYSQL1CreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MYSQL1 update
   */
  export type MYSQL1UpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MYSQL1
     */
    select?: MYSQL1Select<ExtArgs> | null
    /**
     * The data needed to update a MYSQL1.
     */
    data: XOR<MYSQL1UpdateInput, MYSQL1UncheckedUpdateInput>
    /**
     * Choose, which MYSQL1 to update.
     */
    where: MYSQL1WhereUniqueInput
  }

  /**
   * MYSQL1 updateMany
   */
  export type MYSQL1UpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MYSQL1s.
     */
    data: XOR<MYSQL1UpdateManyMutationInput, MYSQL1UncheckedUpdateManyInput>
    /**
     * Filter which MYSQL1s to update
     */
    where?: MYSQL1WhereInput
  }

  /**
   * MYSQL1 upsert
   */
  export type MYSQL1UpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MYSQL1
     */
    select?: MYSQL1Select<ExtArgs> | null
    /**
     * The filter to search for the MYSQL1 to update in case it exists.
     */
    where: MYSQL1WhereUniqueInput
    /**
     * In case the MYSQL1 found by the `where` argument doesn't exist, create a new MYSQL1 with this data.
     */
    create: XOR<MYSQL1CreateInput, MYSQL1UncheckedCreateInput>
    /**
     * In case the MYSQL1 was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MYSQL1UpdateInput, MYSQL1UncheckedUpdateInput>
  }

  /**
   * MYSQL1 delete
   */
  export type MYSQL1DeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MYSQL1
     */
    select?: MYSQL1Select<ExtArgs> | null
    /**
     * Filter which MYSQL1 to delete.
     */
    where: MYSQL1WhereUniqueInput
  }

  /**
   * MYSQL1 deleteMany
   */
  export type MYSQL1DeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MYSQL1s to delete
     */
    where?: MYSQL1WhereInput
  }

  /**
   * MYSQL1 without action
   */
  export type MYSQL1DefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MYSQL1
     */
    select?: MYSQL1Select<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const MYSQL1ScalarFieldEnum: {
    id: 'id',
    modal: 'modal'
  };

  export type MYSQL1ScalarFieldEnum = (typeof MYSQL1ScalarFieldEnum)[keyof typeof MYSQL1ScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type MYSQL1WhereInput = {
    AND?: MYSQL1WhereInput | MYSQL1WhereInput[]
    OR?: MYSQL1WhereInput[]
    NOT?: MYSQL1WhereInput | MYSQL1WhereInput[]
    id?: IntFilter<"MYSQL1"> | number
    modal?: StringFilter<"MYSQL1"> | string
  }

  export type MYSQL1OrderByWithRelationInput = {
    id?: SortOrder
    modal?: SortOrder
  }

  export type MYSQL1WhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MYSQL1WhereInput | MYSQL1WhereInput[]
    OR?: MYSQL1WhereInput[]
    NOT?: MYSQL1WhereInput | MYSQL1WhereInput[]
    modal?: StringFilter<"MYSQL1"> | string
  }, "id">

  export type MYSQL1OrderByWithAggregationInput = {
    id?: SortOrder
    modal?: SortOrder
    _count?: MYSQL1CountOrderByAggregateInput
    _avg?: MYSQL1AvgOrderByAggregateInput
    _max?: MYSQL1MaxOrderByAggregateInput
    _min?: MYSQL1MinOrderByAggregateInput
    _sum?: MYSQL1SumOrderByAggregateInput
  }

  export type MYSQL1ScalarWhereWithAggregatesInput = {
    AND?: MYSQL1ScalarWhereWithAggregatesInput | MYSQL1ScalarWhereWithAggregatesInput[]
    OR?: MYSQL1ScalarWhereWithAggregatesInput[]
    NOT?: MYSQL1ScalarWhereWithAggregatesInput | MYSQL1ScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MYSQL1"> | number
    modal?: StringWithAggregatesFilter<"MYSQL1"> | string
  }

  export type MYSQL1CreateInput = {
    modal: string
  }

  export type MYSQL1UncheckedCreateInput = {
    id?: number
    modal: string
  }

  export type MYSQL1UpdateInput = {
    modal?: StringFieldUpdateOperationsInput | string
  }

  export type MYSQL1UncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    modal?: StringFieldUpdateOperationsInput | string
  }

  export type MYSQL1CreateManyInput = {
    id?: number
    modal: string
  }

  export type MYSQL1UpdateManyMutationInput = {
    modal?: StringFieldUpdateOperationsInput | string
  }

  export type MYSQL1UncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    modal?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type MYSQL1CountOrderByAggregateInput = {
    id?: SortOrder
    modal?: SortOrder
  }

  export type MYSQL1AvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MYSQL1MaxOrderByAggregateInput = {
    id?: SortOrder
    modal?: SortOrder
  }

  export type MYSQL1MinOrderByAggregateInput = {
    id?: SortOrder
    modal?: SortOrder
  }

  export type MYSQL1SumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use MYSQL1DefaultArgs instead
     */
    export type MYSQL1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MYSQL1DefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}