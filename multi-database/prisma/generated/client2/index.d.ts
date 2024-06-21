
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
 * Model MYSQL2
 * 
 */
export type MYSQL2 = $Result.DefaultSelection<Prisma.$MYSQL2Payload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more MYSQL2s
 * const mYSQL2s = await prisma.mYSQL2.findMany()
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
   * // Fetch zero or more MYSQL2s
   * const mYSQL2s = await prisma.mYSQL2.findMany()
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
   * `prisma.mYSQL2`: Exposes CRUD operations for the **MYSQL2** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MYSQL2s
    * const mYSQL2s = await prisma.mYSQL2.findMany()
    * ```
    */
  get mYSQL2(): Prisma.MYSQL2Delegate<ExtArgs>;
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
    MYSQL2: 'MYSQL2'
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
      modelProps: 'mYSQL2'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      MYSQL2: {
        payload: Prisma.$MYSQL2Payload<ExtArgs>
        fields: Prisma.MYSQL2FieldRefs
        operations: {
          findUnique: {
            args: Prisma.MYSQL2FindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MYSQL2Payload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MYSQL2FindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MYSQL2Payload>
          }
          findFirst: {
            args: Prisma.MYSQL2FindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MYSQL2Payload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MYSQL2FindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MYSQL2Payload>
          }
          findMany: {
            args: Prisma.MYSQL2FindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MYSQL2Payload>[]
          }
          create: {
            args: Prisma.MYSQL2CreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MYSQL2Payload>
          }
          createMany: {
            args: Prisma.MYSQL2CreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MYSQL2CreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MYSQL2Payload>[]
          }
          delete: {
            args: Prisma.MYSQL2DeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MYSQL2Payload>
          }
          update: {
            args: Prisma.MYSQL2UpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MYSQL2Payload>
          }
          deleteMany: {
            args: Prisma.MYSQL2DeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MYSQL2UpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MYSQL2UpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MYSQL2Payload>
          }
          aggregate: {
            args: Prisma.MYSQL2AggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMYSQL2>
          }
          groupBy: {
            args: Prisma.MYSQL2GroupByArgs<ExtArgs>,
            result: $Utils.Optional<MYSQL2GroupByOutputType>[]
          }
          count: {
            args: Prisma.MYSQL2CountArgs<ExtArgs>,
            result: $Utils.Optional<MYSQL2CountAggregateOutputType> | number
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
   * Model MYSQL2
   */

  export type AggregateMYSQL2 = {
    _count: MYSQL2CountAggregateOutputType | null
    _avg: MYSQL2AvgAggregateOutputType | null
    _sum: MYSQL2SumAggregateOutputType | null
    _min: MYSQL2MinAggregateOutputType | null
    _max: MYSQL2MaxAggregateOutputType | null
  }

  export type MYSQL2AvgAggregateOutputType = {
    id: number | null
  }

  export type MYSQL2SumAggregateOutputType = {
    id: number | null
  }

  export type MYSQL2MinAggregateOutputType = {
    id: number | null
    modal: string | null
  }

  export type MYSQL2MaxAggregateOutputType = {
    id: number | null
    modal: string | null
  }

  export type MYSQL2CountAggregateOutputType = {
    id: number
    modal: number
    _all: number
  }


  export type MYSQL2AvgAggregateInputType = {
    id?: true
  }

  export type MYSQL2SumAggregateInputType = {
    id?: true
  }

  export type MYSQL2MinAggregateInputType = {
    id?: true
    modal?: true
  }

  export type MYSQL2MaxAggregateInputType = {
    id?: true
    modal?: true
  }

  export type MYSQL2CountAggregateInputType = {
    id?: true
    modal?: true
    _all?: true
  }

  export type MYSQL2AggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MYSQL2 to aggregate.
     */
    where?: MYSQL2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MYSQL2s to fetch.
     */
    orderBy?: MYSQL2OrderByWithRelationInput | MYSQL2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MYSQL2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MYSQL2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MYSQL2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MYSQL2s
    **/
    _count?: true | MYSQL2CountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MYSQL2AvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MYSQL2SumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MYSQL2MinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MYSQL2MaxAggregateInputType
  }

  export type GetMYSQL2AggregateType<T extends MYSQL2AggregateArgs> = {
        [P in keyof T & keyof AggregateMYSQL2]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMYSQL2[P]>
      : GetScalarType<T[P], AggregateMYSQL2[P]>
  }




  export type MYSQL2GroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MYSQL2WhereInput
    orderBy?: MYSQL2OrderByWithAggregationInput | MYSQL2OrderByWithAggregationInput[]
    by: MYSQL2ScalarFieldEnum[] | MYSQL2ScalarFieldEnum
    having?: MYSQL2ScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MYSQL2CountAggregateInputType | true
    _avg?: MYSQL2AvgAggregateInputType
    _sum?: MYSQL2SumAggregateInputType
    _min?: MYSQL2MinAggregateInputType
    _max?: MYSQL2MaxAggregateInputType
  }

  export type MYSQL2GroupByOutputType = {
    id: number
    modal: string
    _count: MYSQL2CountAggregateOutputType | null
    _avg: MYSQL2AvgAggregateOutputType | null
    _sum: MYSQL2SumAggregateOutputType | null
    _min: MYSQL2MinAggregateOutputType | null
    _max: MYSQL2MaxAggregateOutputType | null
  }

  type GetMYSQL2GroupByPayload<T extends MYSQL2GroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MYSQL2GroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MYSQL2GroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MYSQL2GroupByOutputType[P]>
            : GetScalarType<T[P], MYSQL2GroupByOutputType[P]>
        }
      >
    >


  export type MYSQL2Select<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modal?: boolean
  }, ExtArgs["result"]["mYSQL2"]>

  export type MYSQL2SelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modal?: boolean
  }, ExtArgs["result"]["mYSQL2"]>

  export type MYSQL2SelectScalar = {
    id?: boolean
    modal?: boolean
  }


  export type $MYSQL2Payload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MYSQL2"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      modal: string
    }, ExtArgs["result"]["mYSQL2"]>
    composites: {}
  }

  type MYSQL2GetPayload<S extends boolean | null | undefined | MYSQL2DefaultArgs> = $Result.GetResult<Prisma.$MYSQL2Payload, S>

  type MYSQL2CountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MYSQL2FindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MYSQL2CountAggregateInputType | true
    }

  export interface MYSQL2Delegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MYSQL2'], meta: { name: 'MYSQL2' } }
    /**
     * Find zero or one MYSQL2 that matches the filter.
     * @param {MYSQL2FindUniqueArgs} args - Arguments to find a MYSQL2
     * @example
     * // Get one MYSQL2
     * const mYSQL2 = await prisma.mYSQL2.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MYSQL2FindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MYSQL2FindUniqueArgs<ExtArgs>>
    ): Prisma__MYSQL2Client<$Result.GetResult<Prisma.$MYSQL2Payload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one MYSQL2 that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MYSQL2FindUniqueOrThrowArgs} args - Arguments to find a MYSQL2
     * @example
     * // Get one MYSQL2
     * const mYSQL2 = await prisma.mYSQL2.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MYSQL2FindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MYSQL2FindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MYSQL2Client<$Result.GetResult<Prisma.$MYSQL2Payload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first MYSQL2 that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MYSQL2FindFirstArgs} args - Arguments to find a MYSQL2
     * @example
     * // Get one MYSQL2
     * const mYSQL2 = await prisma.mYSQL2.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MYSQL2FindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MYSQL2FindFirstArgs<ExtArgs>>
    ): Prisma__MYSQL2Client<$Result.GetResult<Prisma.$MYSQL2Payload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first MYSQL2 that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MYSQL2FindFirstOrThrowArgs} args - Arguments to find a MYSQL2
     * @example
     * // Get one MYSQL2
     * const mYSQL2 = await prisma.mYSQL2.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MYSQL2FindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MYSQL2FindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MYSQL2Client<$Result.GetResult<Prisma.$MYSQL2Payload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more MYSQL2s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MYSQL2FindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MYSQL2s
     * const mYSQL2s = await prisma.mYSQL2.findMany()
     * 
     * // Get first 10 MYSQL2s
     * const mYSQL2s = await prisma.mYSQL2.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mYSQL2WithIdOnly = await prisma.mYSQL2.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MYSQL2FindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MYSQL2FindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MYSQL2Payload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a MYSQL2.
     * @param {MYSQL2CreateArgs} args - Arguments to create a MYSQL2.
     * @example
     * // Create one MYSQL2
     * const MYSQL2 = await prisma.mYSQL2.create({
     *   data: {
     *     // ... data to create a MYSQL2
     *   }
     * })
     * 
    **/
    create<T extends MYSQL2CreateArgs<ExtArgs>>(
      args: SelectSubset<T, MYSQL2CreateArgs<ExtArgs>>
    ): Prisma__MYSQL2Client<$Result.GetResult<Prisma.$MYSQL2Payload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many MYSQL2s.
     * @param {MYSQL2CreateManyArgs} args - Arguments to create many MYSQL2s.
     * @example
     * // Create many MYSQL2s
     * const mYSQL2 = await prisma.mYSQL2.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends MYSQL2CreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MYSQL2CreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MYSQL2s and returns the data saved in the database.
     * @param {MYSQL2CreateManyAndReturnArgs} args - Arguments to create many MYSQL2s.
     * @example
     * // Create many MYSQL2s
     * const mYSQL2 = await prisma.mYSQL2.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MYSQL2s and only return the `id`
     * const mYSQL2WithIdOnly = await prisma.mYSQL2.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends MYSQL2CreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, MYSQL2CreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MYSQL2Payload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a MYSQL2.
     * @param {MYSQL2DeleteArgs} args - Arguments to delete one MYSQL2.
     * @example
     * // Delete one MYSQL2
     * const MYSQL2 = await prisma.mYSQL2.delete({
     *   where: {
     *     // ... filter to delete one MYSQL2
     *   }
     * })
     * 
    **/
    delete<T extends MYSQL2DeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MYSQL2DeleteArgs<ExtArgs>>
    ): Prisma__MYSQL2Client<$Result.GetResult<Prisma.$MYSQL2Payload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one MYSQL2.
     * @param {MYSQL2UpdateArgs} args - Arguments to update one MYSQL2.
     * @example
     * // Update one MYSQL2
     * const mYSQL2 = await prisma.mYSQL2.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MYSQL2UpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MYSQL2UpdateArgs<ExtArgs>>
    ): Prisma__MYSQL2Client<$Result.GetResult<Prisma.$MYSQL2Payload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more MYSQL2s.
     * @param {MYSQL2DeleteManyArgs} args - Arguments to filter MYSQL2s to delete.
     * @example
     * // Delete a few MYSQL2s
     * const { count } = await prisma.mYSQL2.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MYSQL2DeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MYSQL2DeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MYSQL2s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MYSQL2UpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MYSQL2s
     * const mYSQL2 = await prisma.mYSQL2.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MYSQL2UpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MYSQL2UpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MYSQL2.
     * @param {MYSQL2UpsertArgs} args - Arguments to update or create a MYSQL2.
     * @example
     * // Update or create a MYSQL2
     * const mYSQL2 = await prisma.mYSQL2.upsert({
     *   create: {
     *     // ... data to create a MYSQL2
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MYSQL2 we want to update
     *   }
     * })
    **/
    upsert<T extends MYSQL2UpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MYSQL2UpsertArgs<ExtArgs>>
    ): Prisma__MYSQL2Client<$Result.GetResult<Prisma.$MYSQL2Payload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of MYSQL2s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MYSQL2CountArgs} args - Arguments to filter MYSQL2s to count.
     * @example
     * // Count the number of MYSQL2s
     * const count = await prisma.mYSQL2.count({
     *   where: {
     *     // ... the filter for the MYSQL2s we want to count
     *   }
     * })
    **/
    count<T extends MYSQL2CountArgs>(
      args?: Subset<T, MYSQL2CountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MYSQL2CountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MYSQL2.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MYSQL2AggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MYSQL2AggregateArgs>(args: Subset<T, MYSQL2AggregateArgs>): Prisma.PrismaPromise<GetMYSQL2AggregateType<T>>

    /**
     * Group by MYSQL2.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MYSQL2GroupByArgs} args - Group by arguments.
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
      T extends MYSQL2GroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MYSQL2GroupByArgs['orderBy'] }
        : { orderBy?: MYSQL2GroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MYSQL2GroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMYSQL2GroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MYSQL2 model
   */
  readonly fields: MYSQL2FieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MYSQL2.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MYSQL2Client<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the MYSQL2 model
   */ 
  interface MYSQL2FieldRefs {
    readonly id: FieldRef<"MYSQL2", 'Int'>
    readonly modal: FieldRef<"MYSQL2", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MYSQL2 findUnique
   */
  export type MYSQL2FindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MYSQL2
     */
    select?: MYSQL2Select<ExtArgs> | null
    /**
     * Filter, which MYSQL2 to fetch.
     */
    where: MYSQL2WhereUniqueInput
  }

  /**
   * MYSQL2 findUniqueOrThrow
   */
  export type MYSQL2FindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MYSQL2
     */
    select?: MYSQL2Select<ExtArgs> | null
    /**
     * Filter, which MYSQL2 to fetch.
     */
    where: MYSQL2WhereUniqueInput
  }

  /**
   * MYSQL2 findFirst
   */
  export type MYSQL2FindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MYSQL2
     */
    select?: MYSQL2Select<ExtArgs> | null
    /**
     * Filter, which MYSQL2 to fetch.
     */
    where?: MYSQL2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MYSQL2s to fetch.
     */
    orderBy?: MYSQL2OrderByWithRelationInput | MYSQL2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MYSQL2s.
     */
    cursor?: MYSQL2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MYSQL2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MYSQL2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MYSQL2s.
     */
    distinct?: MYSQL2ScalarFieldEnum | MYSQL2ScalarFieldEnum[]
  }

  /**
   * MYSQL2 findFirstOrThrow
   */
  export type MYSQL2FindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MYSQL2
     */
    select?: MYSQL2Select<ExtArgs> | null
    /**
     * Filter, which MYSQL2 to fetch.
     */
    where?: MYSQL2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MYSQL2s to fetch.
     */
    orderBy?: MYSQL2OrderByWithRelationInput | MYSQL2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MYSQL2s.
     */
    cursor?: MYSQL2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MYSQL2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MYSQL2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MYSQL2s.
     */
    distinct?: MYSQL2ScalarFieldEnum | MYSQL2ScalarFieldEnum[]
  }

  /**
   * MYSQL2 findMany
   */
  export type MYSQL2FindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MYSQL2
     */
    select?: MYSQL2Select<ExtArgs> | null
    /**
     * Filter, which MYSQL2s to fetch.
     */
    where?: MYSQL2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MYSQL2s to fetch.
     */
    orderBy?: MYSQL2OrderByWithRelationInput | MYSQL2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MYSQL2s.
     */
    cursor?: MYSQL2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MYSQL2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MYSQL2s.
     */
    skip?: number
    distinct?: MYSQL2ScalarFieldEnum | MYSQL2ScalarFieldEnum[]
  }

  /**
   * MYSQL2 create
   */
  export type MYSQL2CreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MYSQL2
     */
    select?: MYSQL2Select<ExtArgs> | null
    /**
     * The data needed to create a MYSQL2.
     */
    data: XOR<MYSQL2CreateInput, MYSQL2UncheckedCreateInput>
  }

  /**
   * MYSQL2 createMany
   */
  export type MYSQL2CreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MYSQL2s.
     */
    data: MYSQL2CreateManyInput | MYSQL2CreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MYSQL2 createManyAndReturn
   */
  export type MYSQL2CreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MYSQL2
     */
    select?: MYSQL2SelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many MYSQL2s.
     */
    data: MYSQL2CreateManyInput | MYSQL2CreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MYSQL2 update
   */
  export type MYSQL2UpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MYSQL2
     */
    select?: MYSQL2Select<ExtArgs> | null
    /**
     * The data needed to update a MYSQL2.
     */
    data: XOR<MYSQL2UpdateInput, MYSQL2UncheckedUpdateInput>
    /**
     * Choose, which MYSQL2 to update.
     */
    where: MYSQL2WhereUniqueInput
  }

  /**
   * MYSQL2 updateMany
   */
  export type MYSQL2UpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MYSQL2s.
     */
    data: XOR<MYSQL2UpdateManyMutationInput, MYSQL2UncheckedUpdateManyInput>
    /**
     * Filter which MYSQL2s to update
     */
    where?: MYSQL2WhereInput
  }

  /**
   * MYSQL2 upsert
   */
  export type MYSQL2UpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MYSQL2
     */
    select?: MYSQL2Select<ExtArgs> | null
    /**
     * The filter to search for the MYSQL2 to update in case it exists.
     */
    where: MYSQL2WhereUniqueInput
    /**
     * In case the MYSQL2 found by the `where` argument doesn't exist, create a new MYSQL2 with this data.
     */
    create: XOR<MYSQL2CreateInput, MYSQL2UncheckedCreateInput>
    /**
     * In case the MYSQL2 was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MYSQL2UpdateInput, MYSQL2UncheckedUpdateInput>
  }

  /**
   * MYSQL2 delete
   */
  export type MYSQL2DeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MYSQL2
     */
    select?: MYSQL2Select<ExtArgs> | null
    /**
     * Filter which MYSQL2 to delete.
     */
    where: MYSQL2WhereUniqueInput
  }

  /**
   * MYSQL2 deleteMany
   */
  export type MYSQL2DeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MYSQL2s to delete
     */
    where?: MYSQL2WhereInput
  }

  /**
   * MYSQL2 without action
   */
  export type MYSQL2DefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MYSQL2
     */
    select?: MYSQL2Select<ExtArgs> | null
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


  export const MYSQL2ScalarFieldEnum: {
    id: 'id',
    modal: 'modal'
  };

  export type MYSQL2ScalarFieldEnum = (typeof MYSQL2ScalarFieldEnum)[keyof typeof MYSQL2ScalarFieldEnum]


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


  export type MYSQL2WhereInput = {
    AND?: MYSQL2WhereInput | MYSQL2WhereInput[]
    OR?: MYSQL2WhereInput[]
    NOT?: MYSQL2WhereInput | MYSQL2WhereInput[]
    id?: IntFilter<"MYSQL2"> | number
    modal?: StringFilter<"MYSQL2"> | string
  }

  export type MYSQL2OrderByWithRelationInput = {
    id?: SortOrder
    modal?: SortOrder
  }

  export type MYSQL2WhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MYSQL2WhereInput | MYSQL2WhereInput[]
    OR?: MYSQL2WhereInput[]
    NOT?: MYSQL2WhereInput | MYSQL2WhereInput[]
    modal?: StringFilter<"MYSQL2"> | string
  }, "id">

  export type MYSQL2OrderByWithAggregationInput = {
    id?: SortOrder
    modal?: SortOrder
    _count?: MYSQL2CountOrderByAggregateInput
    _avg?: MYSQL2AvgOrderByAggregateInput
    _max?: MYSQL2MaxOrderByAggregateInput
    _min?: MYSQL2MinOrderByAggregateInput
    _sum?: MYSQL2SumOrderByAggregateInput
  }

  export type MYSQL2ScalarWhereWithAggregatesInput = {
    AND?: MYSQL2ScalarWhereWithAggregatesInput | MYSQL2ScalarWhereWithAggregatesInput[]
    OR?: MYSQL2ScalarWhereWithAggregatesInput[]
    NOT?: MYSQL2ScalarWhereWithAggregatesInput | MYSQL2ScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MYSQL2"> | number
    modal?: StringWithAggregatesFilter<"MYSQL2"> | string
  }

  export type MYSQL2CreateInput = {
    modal: string
  }

  export type MYSQL2UncheckedCreateInput = {
    id?: number
    modal: string
  }

  export type MYSQL2UpdateInput = {
    modal?: StringFieldUpdateOperationsInput | string
  }

  export type MYSQL2UncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    modal?: StringFieldUpdateOperationsInput | string
  }

  export type MYSQL2CreateManyInput = {
    id?: number
    modal: string
  }

  export type MYSQL2UpdateManyMutationInput = {
    modal?: StringFieldUpdateOperationsInput | string
  }

  export type MYSQL2UncheckedUpdateManyInput = {
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

  export type MYSQL2CountOrderByAggregateInput = {
    id?: SortOrder
    modal?: SortOrder
  }

  export type MYSQL2AvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MYSQL2MaxOrderByAggregateInput = {
    id?: SortOrder
    modal?: SortOrder
  }

  export type MYSQL2MinOrderByAggregateInput = {
    id?: SortOrder
    modal?: SortOrder
  }

  export type MYSQL2SumOrderByAggregateInput = {
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
     * @deprecated Use MYSQL2DefaultArgs instead
     */
    export type MYSQL2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MYSQL2DefaultArgs<ExtArgs>

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