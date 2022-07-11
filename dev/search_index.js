var documenterSearchIndex = {"docs":
[{"location":"api/#MonteCarloMeasurements-API","page":"API Reference","title":"MonteCarloMeasurements API","text":"","category":"section"},{"location":"api/","page":"API Reference","title":"API Reference","text":"","category":"page"},{"location":"api/","page":"API Reference","title":"API Reference","text":"Modules = [MonteCarloMeasurements]","category":"page"},{"location":"api/#MonteCarloMeasurements.AccumulatedSeries","page":"API Reference","title":"MonteCarloMeasurements.AccumulatedSeries","text":"AccumulatedSeries{T <: Number} <: MonteCarloMeasurement\n\nA type of MonteCarloMeasurement that accumulates statistics for a  given observable while performing an online binning analysis provided by OnlineLogBinning.jl.\n\n\n\n\n\n","category":"type"},{"location":"api/#MonteCarloMeasurements.MonteCarloMeasurement","page":"API Reference","title":"MonteCarloMeasurements.MonteCarloMeasurement","text":"MonteCarloMeasurement\n\nAbstract type that provides an interface for all MonteCarloMeasurements.\n\nwarning: Warning\nRequired Interface FunctionsThe following functions must have methods defined for each new MonteCarloMeasurement.push!: Move a new measurement into the MonteCarloMeasurement instance.\n\nnote: Note\nDefault Interface FunctionsThe following functions have a default method for any given MonteCarloMeasurement.name: Define a name for a given MonteCarloMeasurement instance. \nmeasurement: Construct a measurement from Measurements.jl.\n\n\n\n\n\n","category":"type"},{"location":"api/#MonteCarloMeasurements.TimeSeries","page":"API Reference","title":"MonteCarloMeasurements.TimeSeries","text":"TimeSeries{T <: Number} <: MonteCarloMeasurement\n\nA type of MonteCarloMeasurement that stores the measurements in a  datastream::Vector{T}. Statistics are not accumulated in an online way.\n\n\n\n\n\n","category":"type"},{"location":"api/#Base.eltype-Tuple{TimeSeries}","page":"API Reference","title":"Base.eltype","text":"eltype(meas::TimeSeries)\n\nBase overload of eltype. A wrapper around eltype(meas.datastream).\n\n\n\n\n\n","category":"method"},{"location":"api/#Base.push!-Tuple{AccumulatedSeries, Any}","page":"API Reference","title":"Base.push!","text":"push!(meas::AccumulatedSeries, value)\n\npush! a single value or many values into a [AccumulatedSeries] datastream.\n\n\n\n\n\n","category":"method"},{"location":"api/#Base.push!-Tuple{TimeSeries, Any}","page":"API Reference","title":"Base.push!","text":"push!(meas::TimeSeries, value)\n\npush! an iterable many values into a [TimeSeries] datastream.\n\nAdditional Information\n\nIf the values are sufficiently long, this will trigger the datastream to be resize!d which can have O(n) complexity. It is preferred to  preallocate the requisite memory with TimeSeries(name, size).\n\n\n\n\n\n","category":"method"},{"location":"api/#Base.push!-Tuple{TimeSeries, Number}","page":"API Reference","title":"Base.push!","text":"push!(meas::TimeSeries, single_value::Number)\n\npush! a single numerical value into the datastream. If the current datastream is full, meaning length(meas.datastream) == meas.current_index, then the datastream is resize!d when the value is pushed. Can result in O(n) complexity.\n\n\n\n\n\n","category":"method"},{"location":"api/#Measurements.measurement-Tuple{MonteCarloMeasurement}","page":"API Reference","title":"Measurements.measurement","text":"measurement(::MonteCarloMeasurement)\n\nDispatch on measurement from Measurements.jl for a MonteCarloMeasurement.  This will call a binning_analysis on the datastream stored in the argument.\n\njulia> acc = AccumulatedSeries(\"Measurement Test\");\n\njulia> for idx ∈ 1:Int(2^18) push!(acc, idx % 512) end;\n\njulia> measurement(acc)\n255.5 ± 2.3\n\n\n\n\n\n","category":"method"},{"location":"api/#MonteCarloMeasurements.binning_analysis-Tuple{AccumulatedSeries}","page":"API Reference","title":"MonteCarloMeasurements.binning_analysis","text":"binning_analysis(meas::AccumulatedSeries)\n\nReturn the BinningAccumulator from the AccumulatedSeries.\n\n\n\n\n\n","category":"method"},{"location":"api/#MonteCarloMeasurements.binning_analysis-Tuple{TimeSeries}","page":"API Reference","title":"MonteCarloMeasurements.binning_analysis","text":"binning_analysis(meas::TimeSeries)\n\nConstruct a BinningAccumulator and push! the datastream into it. Then return the newly constructed BinningAccumulator.\n\n\n\n\n\n","category":"method"},{"location":"api/#MonteCarloMeasurements.name-Tuple{MonteCarloMeasurement}","page":"API Reference","title":"MonteCarloMeasurements.name","text":"name(meas::MonteCarloMeasurement)\n\nReturn the name defined by the input MonteCarloMeasurement.\n\njulia> meas = TimeSeries(\"Walter White\");\n\njulia> name(meas)\n\"Walter White\"\n\n\n\n\n\n","category":"method"},{"location":"","page":"Home","title":"Home","text":"CurrentModule = MonteCarloMeasurements","category":"page"},{"location":"#MonteCarloMeasurements","page":"Home","title":"MonteCarloMeasurements","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for MonteCarloMeasurements.","category":"page"}]
}
