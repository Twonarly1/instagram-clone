import React from 'react'
import { useAccount, useConnect } from 'wagmi'

const Connect = () => {
    const [{ data, error }, connect] = useConnect()
    const [{ data: accountData }, disconnect] = useAccount({
      fetchEns: true,
    })
  return (
    <>
    {!accountData ? (
        <div>
          {data.connectors.map((x) => (
            <button
            className='text-blue-400 text-sm font-semibold' key={x.name}
              onClick={() => connect(x)}
            >
              Connect
            </button>
          ))}
          {error && <div>{error?.message ?? "Failed to connect"}</div>}
        </div>
      ) : (
        <div className="flex items-center space-x-2">
         
          <button
            className="rounded-lg bg-primary-green px-2 py-1 hover:bg-opacity-70"
            onClick={() => [disconnect()]}
          >
            {accountData?.ens?.name ?? accountData?.address.slice(0,6)}
          </button>
        </div>
      )}
    </>
  )
}

export default Connect