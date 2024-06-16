using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

[Route("api/[controller]")]
[ApiController]
public class CounterController : ControllerBase
{
    [Authorize]
    [HttpPost("increment")]
    public IActionResult Increment([FromBody] CounterModel counterModel)
    {
        int counter = counterModel.Counter;
        int newCounter = counter > 1 ? counter * 2 : counter + 1;
        return Ok(new { newCounter });
    }
}

public class CounterModel
{
    public int Counter { get; set; }
}
