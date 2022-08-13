Mix.install([
  {:json, "~> 1.4.0"}
])

defmodule Parse do
  def getpointsbymetric(file, metric) do
    file
    |> File.stream!()
    |> Enum.map(&JSON.decode!/1)
    |> Enum.filter(fn
      %{"type" => "Point", "metric" => ^metric} ->
        true
      _ -> false
    end)
  end

  defp converttime(isotime) do
    {_, dt, _} = DateTime.from_iso8601(isotime)
    DateTime.to_unix(dt)
  end

  def rps(data) do
    requests = data
    |> Enum.map(fn
      %{"data" => %{"time" => time}} ->
      converttime(time)
    end)

    first = hd(requests)

    requests
    |> Enum.frequencies()
    |> Enum.map(fn {k, v} -> {k-first, v} end)
  end
end

[metricsfile, desiredmetric] = System.argv()

Parse.getpointsbymetric(metricsfile, desiredmetric)
|> Parse.rps()
|> IO.inspect()
